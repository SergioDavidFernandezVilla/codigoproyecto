import { useState } from "react";
import CardProducto from "../CardProducto/CardProducto";
import ProductsAPi from "../../utils/api/ProductsApi";

const ContainerProductos = () => {
  const [ListProducts, setListProducts] = useState(ProductsAPi);

  return (
    <>
      <section>
        {ListProducts.map((product) => (
          <CardProducto
            key={product.id}
            titulo={product.name}
            imagen_url={product.image}
            image_alt={product.image_alt}
            precio={product.price}
            descripcion={product.description}
          />
        ))}
      </section>
    </>
  );
};

export default ContainerProductos;
