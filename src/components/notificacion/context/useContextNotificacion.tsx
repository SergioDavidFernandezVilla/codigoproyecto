// NotificacionContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ModoNotificacionType } from "./../types/ModoNotificacionType"

interface NotificacionContextType {
  notificacion: ModoNotificacionType | null;
  showNotificacion: (data: ModoNotificacionType, duration?: number) => void;
  hideNotificacion: () => void;
}

const NotificacionContext = createContext<NotificacionContextType | undefined>(
  undefined
);

export const NotificacionProvider = ({ children }: { children: ReactNode }) => {
  const [notificacion, setNotificacion] = useState<ModoNotificacionType | null>(null);

  const showNotificacion = (data: ModoNotificacionType, duration: number = 3000) => {
    setNotificacion(data);

    // Auto ocultar notificación después del tiempo especificado
    setTimeout(() => {
      setNotificacion(null);
    }, duration);
  };

  const hideNotificacion = () => {
    setNotificacion(null);
  };

  return (
    <NotificacionContext.Provider
      value={{ notificacion, showNotificacion, hideNotificacion }}
    >
      {children}
    </NotificacionContext.Provider>
  );
};

export const useNotificacionContext = () => {
  const ctx = useContext(NotificacionContext);
  if (!ctx)
    throw new Error(
      "useNotificacionContext debe usarse dentro de <NotificacionProvider>"
    );
  return ctx;
};
