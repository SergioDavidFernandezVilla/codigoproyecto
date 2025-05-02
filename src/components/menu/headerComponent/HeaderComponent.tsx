import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import SubMenuComponent from "../subMenu/SubMenuComponent";

import { ProductType } from "../../products/types/ProductType";
import { ModoNotificacionType } from "../../notificacion/types/ModoNotificacionType";

export interface HeaderProps {
  setModalCarrito: React.Dispatch<React.SetStateAction<boolean>>;
  modalCarrito: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  modalCarrito,
  setModalCarrito,
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
              />
            </figure>
          </li>
        </ul>
      </header>

      <SubMenuComponent
        modalCarrito={modalCarrito}
        setModalCarrito={setModalCarrito}
      />
    </>
  );
};

export default HeaderComponent;
