import {
  AiOutlineBars,
  AiFillShopping,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const NotificacionComponent = ({ modoNotificacionGrupo }) => {
  const { mensaje, icono, tipo } = modoNotificacionGrupo;

  const getClasePorTipo = () => {
    switch (tipo) {
      case "success":
        return "notificacion_success";
      case "error":
        return "notificacion_error";
      case "info":
        return "notificacion_info";
      case "warning":
        return "notificacion_warning";
      default:
        return "notificacion_info";
    }
  };

  return (
    <div className="container_notificaciones">
      <aside className={`aside_container_notificaion ${getClasePorTipo()}`}>
        <header className="header_container_notificaciones">
          <span className="span_container_notificaciones">
            {mensaje}
            {icono}
          </span>
        </header>
      </aside>
    </div>
  );
};

export default NotificacionComponent;
