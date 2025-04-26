const CardProducto = ({
  titulo,
  imagen_url,
  image_alt,
  precio,
  descripcion,
}) => {
  return (
    <article>
      <header>
        <h4>{titulo}</h4>
        <p>
          <strong>${precio}</strong>
        </p>
      </header>

      <figure>
        <img src={imagen_url} alt={image_alt} height={300}></img>
      </figure>
    </article>
  );
};

export default CardProducto;
