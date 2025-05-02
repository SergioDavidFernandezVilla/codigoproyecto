// LIBRERIAS
import { useContext, useState } from "react";

// CONTEXT
import { CarritoContext } from "../../context/useContextCarrito";

export const useHookCarrito = () => {
  const { carrito, setCarrito, itemProductos } = useContext(CarritoContext);

  return {
    carrito,
    setCarrito,
    itemProductos,
  };
};
