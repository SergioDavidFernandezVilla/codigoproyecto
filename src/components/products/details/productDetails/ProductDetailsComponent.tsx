// ICONOS
import { AiFillTags } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";

// COMPONENTS
import ButtonProduct from "../../buttonProduct/ButtonProduct";
import React from "react";

interface ProductDetailsComponentProps {
  show: boolean;
  descripcion: string;
  precio: number;
  envio: number;
}

const ProductDetailsComponent: React.FC<ProductDetailsComponentProps> = ({
  show,
  descripcion,
  precio,
  envio,
}) => {
  return (
    <figcaption className="figcaption_producto_en_carrito">
      <header className="header_figure_figcation_tag_compra_linea_producto_en_carrito">
        <ButtonProduct textButton={`$${precio}`} iconButton=<AiFillTags /> />
        <ButtonProduct
          textButton={`$${envio}`}
          iconButton=<CiDeliveryTruck />
        />
      </header>

      {/* NO JALA LA DESCRIPCION ;(*/}
      <div className="div_figure_figcaption_producto_en_carrito">
        <p className="p_figure_figcaption_producto_en_carrito">{descripcion}</p>
      </div>
    </figcaption>
  );
};

export default ProductDetailsComponent;
