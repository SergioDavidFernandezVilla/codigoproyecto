// DEPENDENCIAS
import React, { useState, useEffect } from "react";

// ICONS

// COMPONENTS
import CardProducto from "../cardProducto/CardProducto";

// API
import ProductsAPi from "../../../utils/api/ProductsApi";

// TYPES
import { ProductType } from "../types/ProductType";

// HOOKS
import { useUpdateCarrito } from "../hooks/addToCart/useUpdateCarrito";

const ContainerProductos = () => {
  const [ListProducts, setListProducts] = useState<ProductType[]>([]);

  const { handleAddProductoToCart } = useUpdateCarrito();

  useEffect(() => {
    setListProducts(ProductsAPi);
  }, []);

  return (
    <section>
      {ListProducts.map((product) => (
        <CardProducto
          key={product.id}
          product={product}
          onAddCart={() => handleAddProductoToCart(product)}
        />
      ))}
    </section>
  );
};

export default ContainerProductos;
