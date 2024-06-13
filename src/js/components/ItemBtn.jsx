const ItemBtn = ({ buttonClicked, name, handleButtonClick }) => {
  return (
    <>
      <button
        className={buttonClicked === name ? "active-btn" : undefined}
        onClick={() => handleButtonClick(name)}
      >
        {name}
      </button>
    </>
  );
};
export default ItemBtn;
