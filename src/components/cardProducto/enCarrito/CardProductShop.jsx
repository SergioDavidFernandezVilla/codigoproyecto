import { useState } from "react";

// ICONS
import { AiFillTags, AiFillShopping } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";

// COMPONENTS
import ButtonProduct from "../../presentacion/buttonProduct/ButtonProduct";

// HOOKS
import { useNotificacion } from "../../../hooks/useNotificacion";

const CardProductShop = ({
  id,
  titulo,
  imagen_url,
  image_alt,
  precio,
  stock,
  envio,
  descripcion,
  cantidadProductos,
  setCantidadProductos,
  modoNotificacionGrupo,
  setModoNotificacionGrupo,
}) => {
  const [stockProducto, setStockProducto] = useState(1);
  const [detailsOverProduct, setDetailsOverProduct] = useState(true);
  const { activarNotificacion } = useNotificacion(setModoNotificacionGrupo);

  // PANTALLA WIDTH
  const [width, setWidth] = useState(window.innerWidth);

  console.log("pantalla", width);

  const EventDetailsProductoMouseOver = () => {
    setDetailsOverProduct(false);
  };

  const EventDetailsProductoMouseOut = () => {
    setDetailsOverProduct(true);
  };

  const ChangeStockProducto = (e) => {
    const value = parseInt(e.target.value);

    if (value <= stock) {
      setCantidadProductos(value);
      setStockProducto(value);
    }
  };

  const AddNumberProducto = () => {
    if (stockProducto <= stock) {
      setStockProducto((prevStock) => prevStock + 1);
      setCantidadProductos((prevCantidad) => prevCantidad + 1);

      activarNotificacion({
        tipo: "success",
        mensaje: "Producto agregado exitosamente!",
        icono: <AiFillShopping className="icon_container_notificaciones" />,
      });
    }
  };

  const NumberLessStock = () => {
    if (stockProducto >= 1 && stockProducto > 1) {
      setStockProducto((prevStock) => prevStock - 1);
      setCantidadProductos((prevCantidad) => prevCantidad - 1);

      activarNotificacion({
        tipo: "error",
        mensaje: "Se ha eliminado un producto del carrito!",
        icono: <AiFillShopping className="icon_container_notificaciones" />,
      });
    }
  };

  return (
    <article className="article_producto_en_carrito" key={id}>
      <header className="header_producto_en_carrito">
        <h4 className="h4_producto_en_carrito">{titulo}</h4>

        <div className="container_btn_cantidad_carrito">
          <button
            className="btn_cantidad_carrito_izquierdo"
            onClick={NumberLessStock}
          >
            <span className="icon_carrito_add">-</span>
          </button>
          <input
            className="input_cantidad_carrito"
            type="number"
            placeholder="1"
            min="1"
            max={stock}
            onChange={ChangeStockProducto}
            value={stockProducto}
          />
          <button
            className="btn_cantidad_carrito_derecho"
            onClick={AddNumberProducto}
          >
            <span className="icon_carrito_add">+</span>
          </button>
        </div>
      </header>

      <figure
        className="figure_producto_en_carrito"
        onMouseOver={EventDetailsProductoMouseOver}
        onMouseOut={EventDetailsProductoMouseOut}
      >
        {detailsOverProduct && (
          <div className="filter_figure_producto_en_carrito"></div>
        )}
        <div className="container_figure_tag_compra_linea">
          <figcaption className="figcaption_producto_en_carrito">
            <header className="header_figure_figcation_tag_compra_linea_producto_en_carrito">
              <ButtonProduct
                textButton={`$${precio}`}
                iconButton=<AiFillTags />
              />
              <ButtonProduct
                textButton={`$${envio}`}
                iconButton=<CiDeliveryTruck />
              />
            </header>

            {detailsOverProduct && (
              <footer className="footer_figure_figcation_tag_compra_linea_producto_en_carrito">
                <p className="p_producto_en_carrito">{descripcion}</p>
              </footer>
            )}
          </figcaption>
        </div>

        <img
          src="./assets/images/camisa-manga-corta.jpg"
          alt={image_alt}
          className="img_producto_en_carrito"
        ></img>
      </figure>
    </article>
  );
};

export default CardProductShop;
