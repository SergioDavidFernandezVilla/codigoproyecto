import { useContext } from "react";
import { useNotificacionContext } from "../../../notificacion/context/useContextNotificacion";
import { ProductType } from "../../types/ProductType";
import { CarritoContext } from "../../context/useContextCarrito";
import { AiOutlineShopping } from "react-icons/ai";
import React from "react";

export const useUpdateCarrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const { showNotificacion } = useNotificacionContext();

  const handleAddProductoToCart = (product: ProductType): void => {
    const productoEnCarrito = carrito.find(
      (item) => item.product.id === product.id
    );

    let updatedCarrito;

    if (productoEnCarrito) {
      updatedCarrito = carrito.map((item) =>
        item.product.id === product.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      updatedCarrito = [...carrito, { product: product, cantidad: 1 }];
    }

    setCarrito(updatedCarrito);

    showNotificacion(
      {
        type: "success",
        message: `Producto "${product.titulo}" añadido al carrito`,
        icon: <AiOutlineShopping />,
      },
      2000
    );
  };

  const updateCantidadProducto = (id: number, value: number) => {
    const updatedCarrito = carrito.map((item) =>
      item.product.id === id ? { ...item, cantidad: value } : item
    );

    setCarrito(updatedCarrito);
  };

  return { handleAddProductoToCart, updateCantidadProducto };
};
