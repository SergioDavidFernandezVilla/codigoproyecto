// DEPENDENCIAS
import React from "react";

// COMPONENTS
import CardProductShop from "../detailsModalCart/CardProductShop";

// ICONS
import { AiOutlineShoppingCart } from "react-icons/ai";

// HOOKS
import { useHookCarrito } from "../hooks/carrito/useHookCarrito";

interface ModalShopComponentProps {
  handleOffModal: () => void;
}

const ModalShopComponent: React.FC<ModalShopComponentProps> = ({
  handleOffModal,
}) => {
  const { carrito, itemProductos } = useHookCarrito();

  // ✅ Cálculo correcto basado en carrito con { producto, cantidad }
  const priceProducts = carrito.reduce((total, item) => {
    return total + item.product.precio * item.cantidad;
  }, 0);

  const totalEnvio = carrito.reduce((total, item) => {
    return total + item.product.envio * item.cantidad;
  }, 0);

  const totalPrice = priceProducts + totalEnvio;

  return (
    <div className="modal_carrito_menu_secundario">
      <header className="header_modal_carrito_menu_secundario">
        <div className="container_btn_cerrar_modal_carrito_menu_secundario">
          <button
            onClick={handleOffModal}
            className="btn_cerrar_modal_carrito_menu_secundario"
          >
            X
          </button>
        </div>

        <h3 className="h3_modal_carrito_menu_secundario">
          <AiOutlineShoppingCart className="icon_modal_carrito_menu_secundario" />
          Carrito
        </h3>

        {itemProductos > 0 ? (
          <p className="p_modal_carrito_menu_secundario">
            Cantidad de productos: {itemProductos}
          </p>
        ) : (
          <p className="p_modal_carrito_menu_secundario">Carrito vacío</p>
        )}
      </header>

      {carrito.map((item) => (
        <div key={item.product.id} className="producto_en_carrito">
          <CardProductShop product={item.product} cantidad={item.cantidad} />
        </div>
      ))}

      <footer className="footer_modal_carrito_menu_secundario">
        {itemProductos > 0 && (
          <header className="header_footer_modal_carritp_menu_secundario">
            <p>Subtotal: ${priceProducts} MXN</p>
            <p>Envío: ${totalEnvio} MXN</p>
            <p>Total a pagar: ${totalPrice} MXN</p>
          </header>
        )}

        <div className="container_footer_btn_modal_carrito_menu_secundario">
          <button onClick={handleOffModal}>Seguir comprando</button>
          <button>Pagar Ahora</button>
        </div>
      </footer>
    </div>
  );
};

export default ModalShopComponent;
