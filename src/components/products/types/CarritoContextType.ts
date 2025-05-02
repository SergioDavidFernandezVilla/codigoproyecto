import { ProductType } from "./ProductType";

export interface CarritoContextType {
  carrito: CarritoItem[];
  setCarrito: React.Dispatch<React.SetStateAction<CarritoItem[]>>;
  itemProductos: number;
}

export interface CarritoItem {
  product: ProductType;
  cantidad: number;
}
