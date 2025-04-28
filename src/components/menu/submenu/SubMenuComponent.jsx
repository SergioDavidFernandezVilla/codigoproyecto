import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineBars,
  AiFillShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ModalShopComponent from "../../presentacion/modalShop/ModalShopComponent";
import NotificacionComponent from "../../presentacion/notificacion/NotificacionComponent";

const SubMenuComponent = ({
  carrito,
  setCarrito,
  modalCarrito,
  setModalCarrito,
  cantidadProductos,
  setCantidadProductos,
  modoNotificacionGrupo,
  setModoNotificacionGrupo,
}) => {
  const handleClickCarrito = () => {
    setModalCarrito(!modalCarrito);
  };

  const handleRemoveModal = () => {
    setModalCarrito(false);
  };

  return (
    <header className="header_menu_secundario">
      <ul className="ul_menu_secundario">
        {modalCarrito && (
          <ModalShopComponent
            modoNotificacionGrupo={modoNotificacionGrupo}
            setModoNotificacionGrupo={setModoNotificacionGrupo}
            setCantidadProductos={setCantidadProductos}
            handleRemoveModal={handleRemoveModal}
            carrito={carrito}
            cantidadProductos={cantidadProductos}
            setCarrito={setCarrito}
          />
        )}

        {cantidadProductos > 0 ? (
          <li className="li_carrito_menu_secundario">
            <Link onClick={handleClickCarrito}>
              Carrito
              <AiFillShopping className="icon_carrito_shop" />
              <span className="cantidad_carrito_menu_secundario">
                {cantidadProductos}
              </span>
            </Link>

            {modalCarrito && <span className="puntador_carrito"></span>}
          </li>
        ) : (
          <li className="li_carrito_menu_secundario">
            <Link onClick={handleClickCarrito}>
              Carrito
              <AiOutlineShoppingCart className="icon_carrito_add" />
            </Link>

            {modalCarrito && <span className="puntador_carrito"></span>}
          </li>
        )}

        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Help center</Link>
        </li>
      </ul>
    </header>
  );
};

export default SubMenuComponent;
