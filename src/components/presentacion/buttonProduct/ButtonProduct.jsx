const ButtonProduct = ({ iconButton, textButton, onClickEvent }) => {
  return (
    <button onClick={onClickEvent}>
      {iconButton}
      <strong>{textButton}</strong>
    </button>
  );
};

export default ButtonProduct;
