import CardProductShop from "../../cardProducto/enCarrito/CardProductShop";

import {
  AiOutlineBars,
  AiFillShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ModalShopComponent = ({
  cantidadProductos,
  setCantidadProductos,
  carrito,
  setCarrito,
  handleRemoveModal,
  modoNotificacionGrupo,
  setModoNotificacionGrupo
}) => {
  const priceProducts = carrito.reduce((total, item) => {
    return cantidadProductos * item.precio;
  }, 0);

  const totalEnvio = carrito.reduce((total, item) => {
    return cantidadProductos * item.envio;
  }, 0);
  const totalPrice = carrito.reduce((total, item) => {
    return cantidadProductos * item.precio + totalEnvio;
  }, 0);

  return (
    <div className="modal_carrito_menu_secundario">
      <header className="header_modal_carrito_menu_secundario">
        <div className="container_btn_cerrar_modal_carrito_menu_secundario">
          <button
            onClick={handleRemoveModal}
            className="btn_cerrar_modal_carrito_menu_secundario"
          >
            X
          </button>
        </div>

        <h3 className="h3_modal_carrito_menu_secundario">
          <AiOutlineShoppingCart className="icon_modal_carrito_menu_secundario" />
          Carrito
        </h3>
        {cantidadProductos > 0 ? (
          <p className="p_modal_carrito_menu_secundario">
            Cantidad de productos {cantidadProductos}
          </p>
        ) : (
          <p className="p_modal_carrito_menu_secundario">Carrito vacio</p>
        )}
      </header>

      {carrito.map((item) => (
        <div key={item.id} className="producto_en_carrito">
          <CardProductShop
            key={item.id}
            titulo={item.titulo}
            imagen_url={item.imagen_url}
            image_alt={item.image_alt}
            precio={item.precio}
            envio={item.envio}
            stock={item.stock}
            descripcion={item.descripcion}
            cantidadProductos={cantidadProductos}
            setCantidadProductos={setCantidadProductos}
            modoNotificacionGrupo={modoNotificacionGrupo}
          setModoNotificacionGrupo={setModoNotificacionGrupo}
          />
        </div>
      ))}

      <footer className="footer_modal_carrito_menu_secundario">
        {cantidadProductos > 0 ? (
          <header className="header_footer_modal_carritp_menu_secundario">
            <p>Subtotal: ${priceProducts} MXN.</p>
            <p>Envio: ${totalEnvio} MXN.</p>
            <p>Total a pagar: ${totalPrice} MXN.</p>
          </header>
        ) : null}

        <div className="container_footer_btn_modal_carrito_menu_secundario">
          <button onClick={handleRemoveModal}>Seguir comprando</button>
          <button>Pagar Ahora</button>
        </div>
      </footer>
    </div>
  );
};

export default ModalShopComponent;
