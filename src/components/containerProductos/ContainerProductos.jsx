import { useState } from "react";
import CardProducto from "../cardProducto/CardProducto";
import ProductsAPi from "../../utils/api/ProductsApi";

const ContainerProductos = ({
  cantidadProductos,
  setCantidadProductos,
  carrito,
  setAgregarAlCarrito,
  agregarAlCarrito,
  setCarrito,
  modoNotificacionGrupo,
  setModoNotificacionGrupo,
}) => {
  const [ListProducts, setListProducts] = useState(ProductsAPi);

  return (
    <>
      <section>
        {ListProducts.map((product) => (
          <CardProducto
            carrito={carrito}
            setCarrito={setCarrito}
            cantidadProductos={cantidadProductos}
            setCantidadProductos={setCantidadProductos}
            modoNotificacionGrupo={modoNotificacionGrupo}
            setModoNotificacionGrupo={setModoNotificacionGrupo}
            key={product.id}
            titulo={product.name}
            imagen_url={product.image}
            image_alt={product.image_alt}
            precio={product.price}
            envio={product.envio}
            stock={product.stock}
            descripcion={product.description}
          />
        ))}
      </section>
    </>
  );
};

export default ContainerProductos;
