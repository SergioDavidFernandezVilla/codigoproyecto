import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";

// COMPONENTS
import ButtonProduct from "../presentacion/buttonProduct/ButtonProduct";

// HOOKS
import { useNotificacion } from "../../hooks/useNotificacion";

const CardProducto = ({
  titulo,
  imagen_url,
  image_alt,
  precio,
  envio,
  stock,
  descripcion,
  cantidadProductos,
  setCantidadProductos,
  carrito,
  setCarrito,
  modoNotificacionGrupo,
  setModoNotificacionGrupo,
}) => {
  const { activarNotificacion } = useNotificacion(setModoNotificacionGrupo);

  const ChangeAddCart = () => {
    // Verifica si el producto ya está en el carrito
    const yaEnCarrito = carrito.some((item) => item.titulo === titulo);

    if (yaEnCarrito) {
      // Si ya está en el carrito, no hacemos nada
      return;
    }

    // Si no está, lo agregamos
    setCarrito([
      ...carrito,
      { titulo, imagen_url, precio, envio, descripcion, stock },
    ]);

    setCantidadProductos((prevCantidad) => prevCantidad + 1);

    // Activar notificación de agregado al carrito
    activarNotificacion({
      tipo: "success",
      mensaje: "Producto agregado al carrito",
      icono: <AiOutlineShoppingCart className="icon_carrito_add" />,
    })
  };

  return (
    <article>
      <header>
        <h4>{titulo}</h4>
        <p>
          precio
          <strong>${precio}</strong>
        </p>
        <p>
          envio
          <strong>${envio}</strong>
        </p>
      </header>

      <figure>
        <img
          src="./assets/images/camisa-manga-corta.jpg"
          alt={image_alt}
          height={300}
        ></img>
        <div className="tag_compra_linea">
          <ButtonProduct
            textButton={"Comprar"}
            iconButton={<AiFillShopping className="icon_carrito_add" />}
          />

          <ButtonProduct
            onClickEvent={ChangeAddCart}
            textButton={"Añadir al carrito"}
            iconButton={<AiFillShopping className="icon_carrito_add" />}
          />
        </div>
      </figure>
    </article>
  );
};

export default CardProducto;
