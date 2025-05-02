import React from "react";
import { useNotificacionContext } from "../context/useContextNotificacion";

type NotificacionProps = {};

const NotificacionComponent: React.FC<NotificacionProps> = () => {
  const { notificacion } = useNotificacionContext();

  if (!notificacion) return null; // 👈 No mostrar nada si no hay notificación

  const { message: mensaje, type: tipo, icon: icono } = notificacion;

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
            {icono} {mensaje}
          </span>
        </header>
      </aside>
    </div>
  );
};

export default NotificacionComponent;
