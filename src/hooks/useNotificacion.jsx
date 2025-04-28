import { useCallback } from "react";

export const useNotificacion = (setModoNotificacionGrupo) => {
  const activarNotificacion = useCallback(
    ({ tipo = "info", mensaje, icono, duracion = 3000 }) => {
      setModoNotificacionGrupo({
        activo: true,
        tipo, // puede ser 'success', 'error', 'info', 'warning'
        mensaje,
        icono,
      });

      setTimeout(() => {
        setModoNotificacionGrupo((prev) => ({
          ...prev,
          activo: false,
        }));
      }, duracion);
    },
    [setModoNotificacionGrupo]
  );

  return { activarNotificacion };
};
