// DEPENDECIAS
import React from "react";
import { Link } from "react-router-dom";

// ICONS
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";

// COMPONENTS
import ModalShopComponent from "../../products/modalCart/ModalShopComponent";

// TYPES
import { ModoNotificacionType } from "../../notificacion/types/ModoNotificacionType";

// CONTEXT
import { useHookCarrito } from "../../products/hooks/carrito/useHookCarrito";

interface SubMenuComponentProps {
  modalCarrito: boolean;
  setModalCarrito: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubMenuComponent: React.FC<SubMenuComponentProps> = ({
  modalCarrito,
  setModalCarrito,
}) => {
  const { itemProductos } = useHookCarrito();

  const handleClickCarrito = () => {
    setModalCarrito(!modalCarrito);
  };

  const handleOffModal = () => {
    setModalCarrito(false);
  };

  return (
    <header className="header_menu_secundario">
      <ul className="ul_menu_secundario">
        {modalCarrito && <ModalShopComponent handleOffModal={handleOffModal} />}

        {itemProductos > 0 ? (
          <li className="li_carrito_menu_secundario">
            <Link onClick={handleClickCarrito} to={""}>
              Carrito
              <AiFillShopping className="icon_carrito_shop" />
              <span className="cantidad_carrito_menu_secundario">
                {itemProductos}
              </span>
            </Link>

            {modalCarrito && <span className="puntador_carrito"></span>}
          </li>
        ) : (
          <li className="li_carrito_menu_secundario">
            <Link onClick={handleClickCarrito} to="">
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
