import { JSX } from "react";

export type ModoNotificacionType = {
  message?: string;
  type: "success" | "error" | "info" | "warning";
  icon?: string | JSX.Element;
  activo?: boolean;
  timeout?: number;
  onClose?: () => void;
};
