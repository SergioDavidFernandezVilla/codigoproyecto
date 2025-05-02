import React from "react";
import { useUpdateCarrito } from "../../hooks/addToCart/useUpdateCarrito";

interface QuantitySelectorComponentProps {
  stock: number;
  quantity: number;
  onRemove: () => void;
  onAdd: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuantitySelectorComponent: React.FC<QuantitySelectorComponentProps> = ({
  stock,
  quantity,
  onAdd,
  onRemove,
  onChange,
}) => {
  return (
    <div className="container_btn_cantidad_carrito">
      <button className="btn_cantidad_carrito_izquierdo" onClick={onRemove}>
        <span className="icon_carrito_add">-</span>
      </button>
      <input
        className="input_cantidad_carrito"
        type="number"
        placeholder="1"
        min="1"
        max={stock}
        value={quantity}
        onChange={onChange}
      />
      <button className="btn_cantidad_carrito_derecho" onClick={onAdd}>
        <span className="icon_carrito_add">+</span>
      </button>
    </div>
  );
};

export default QuantitySelectorComponent;
