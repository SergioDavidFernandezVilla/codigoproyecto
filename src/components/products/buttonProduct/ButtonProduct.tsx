import React from "react";

interface ButtonProductProps {
  iconButton: React.ReactNode;
  textButton: string;
  onClickEvent?: () => void;
}

const ButtonProduct: React.FC<ButtonProductProps> = ({ iconButton, textButton, onClickEvent }) => {
  return (
    <button onClick={onClickEvent}>
      {iconButton}
      <strong>{textButton}</strong>
    </button>
  );
};

export default ButtonProduct;
