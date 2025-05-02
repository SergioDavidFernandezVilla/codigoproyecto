import React, { createContext, useState, useMemo } from "react";
import { CarritoContextType, CarritoItem } from "../types/CarritoContextType";

export const CarritoContext = createContext<CarritoContextType>({
  carrito: [],
  setCarrito: () => {},
  itemProductos: 0,
});

export const CarritoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [carrito, setCarrito] = useState<CarritoItem[]>([]);

  const itemProductos = useMemo(() => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  }, [carrito]);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, itemProductos }}>
      {children}
    </CarritoContext.Provider>
  );
};
