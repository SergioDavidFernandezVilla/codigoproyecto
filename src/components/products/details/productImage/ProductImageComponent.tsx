import { useState } from "react";

import ProductDetailsComponent from "../productDetails/ProductDetailsComponent";
import React from "react";

interface ProductImageComponentProps {
  image_url: string | undefined | null;
  image_alt: string | undefined;
  descripcion: string;
  precio: number;
  envio: number;
}

const ProductImageComponent: React.FC<ProductImageComponentProps> = ({
  image_url,
  image_alt,
  descripcion,
  precio,
  envio,
}) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <figure
      className="figure_producto_en_carrito"
      onMouseDown={() => setShowDetails(false)}
      onMouseOut={() => setShowDetails(true)}
    >
      {showDetails && (
        <div className="filter_figure_producto_en_carrito">
          <ProductDetailsComponent
            show={showDetails}
            descripcion={descripcion}
            precio={precio}
            envio={envio}
          />
        </div>
      )}

      <img
        src="./assets/images/camisa-manga-corta.jpg"
        alt={image_alt}
        className="img_producto_en_carrito"
      ></img>
    </figure>
  );
};

export default ProductImageComponent;
