// DEPENDENCIAS
import React from "react";

// ICONS
import { AiFillTags, AiFillShopping } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";

// COMPONENTS
import ButtonProduct from "../buttonProduct/ButtonProduct";
import QuantitySelectorComponent from "../details/quantitySelector/QuantitySelectorComponent";
import ProductImageComponent from "../details/productImage/ProductImageComponent";

// HOOKS
import { useUpdateCarrito } from "../hooks/addToCart/useUpdateCarrito";

// TIPOS
import { ProductType } from "../types/ProductType";
import { useNotificacionContext } from "../../notificacion/context/useContextNotificacion";

interface CardProductShopProps {
  product: ProductType;
  cantidad: number;
}

const CardProductShop: React.FC<CardProductShopProps> = ({
  product,
  cantidad,
}) => {
  const { updateCantidadProducto } = useUpdateCarrito(); // 👈 esto debes tenerlo en tu hook
  const { showNotificacion } = useNotificacionContext();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.stock) {
      updateCantidadProducto(product.id, value);
    }
  };

  const handleAdd = () => {
    if (cantidad < product.stock) {
      updateCantidadProducto(product.id, cantidad + 1);
      showNotificacion({
        message: "Producto agregado al carrito",
        icon: <AiFillShopping />,
        type: "success",
        timeout: 2000,
      });
    }
  };

  const handleRemove = () => {
    if (cantidad > 1) {
      updateCantidadProducto(product.id, cantidad - 1);
      showNotificacion({
        message: "Producto eliminado del carrito",
        icon: <AiFillShopping />,
        type: "error",
        timeout: 2000,
      });
    }
  };

  return (
    <article className="article_producto_en_carrito" key={product.id}>
      <header className="header_producto_en_carrito">
        <h4 className="h4_producto_en_carrito">{product.titulo}</h4>

        <QuantitySelectorComponent
          stock={product.stock}
          quantity={cantidad}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onChange={handleQuantityChange}
        />
      </header>

      <ProductImageComponent
        image_url={product.image_url}
        image_alt={product.image_alt}
        descripcion={product.description}
        precio={product.precio}
        envio={product.envio}
      />
    </article>
  );
};

export default CardProductShop;
