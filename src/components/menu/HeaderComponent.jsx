import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import SubMenuComponent from "./submenu/SubMenuComponent.jsx";

const HeaderComponent = ({
  cantidadProductos,
  setCantidadProductos,
  carrito,
  setCarrito,
  modalCarrito,
  setModalCarrito,
  modoNotificacionGrupo,
  setModoNotificacionGrupo
}) => {
  return (
    <>
      <header className="header_menu_principal">
        <ul className="ul_header_menu_principal">
          <li>
            <AiOutlineBars className="icon_menu_header" />
          </li>
          <li>
            <Link to="/">
              <h1 className="titulo_pagina">Tienda Online</h1>
            </Link>
          </li>
        </ul>

        <ul className="ul_header_menu_principal">
          <li>
            <figure>
              <img
                className="perfil_user"
                src="./assets/images/camisa-manga-corta.jpg"
                alt="logo"
              ></img>
            </figure>
          </li>
        </ul>
      </header>

      <SubMenuComponent
        modoNotificacionGrupo={modoNotificacionGrupo}
        setModoNotificacionGrupo={setModoNotificacionGrupo}
        cantidadProductos={cantidadProductos}
        setCantidadProductos={setCantidadProductos}
        carrito={carrito}
        setCarrito={setCarrito}
        modalCarrito={modalCarrito}
        setModalCarrito={setModalCarrito}
      />
    </>
  );
};

export default HeaderComponent;
