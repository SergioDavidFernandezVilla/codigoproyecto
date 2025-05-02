// LIBRERIAS
import React from "react";

// ICONS
import { AiFillShopping } from "react-icons/ai";

// COMPONENTS
import ButtonProduct from "../buttonProduct/ButtonProduct";

// TYPES
import { ProductType } from "../types/ProductType";

interface CardProductoProps {
  onAddCart: () => void;
  product: ProductType;
}

const CardProducto: React.FC<CardProductoProps> = ({ onAddCart, product }) => {
  const {
    id,
    titulo,
    image_url,
    image_alt,
    precio,
    envio,
    description,
    stock,
  } = product;

  return (
    <article key={id}>
      <header>
        <h4>{titulo}</h4>
        <p>
          precio
          <strong>${precio}</strong>
        </p>
        <p>
          envio
          <strong>${envio}</strong>
        </p>
      </header>

      <figure>
        <img src="./assets/images/camisa-manga-corta.jpg" alt={image_alt}></img>
        <div className="tag_compra_linea">
          <ButtonProduct
            textButton={"Comprar"}
            iconButton={<AiFillShopping className="icon_carrito_add" />}
          />

          <ButtonProduct
            onClickEvent={onAddCart}
            textButton={"Añadir al carrito"}
            iconButton={<AiFillShopping className="icon_carrito_add" />}
          />
        </div>
      </figure>
    </article>
  );
};

export default CardProducto;
