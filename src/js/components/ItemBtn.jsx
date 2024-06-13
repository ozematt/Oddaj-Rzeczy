const ItemBtn = ({ buttonClicked, name, handleButtonClick }) => {
  return (
    <>
      <button
        className={`${buttonClicked === name ? "active-btn" : undefined} item-btn`}
        onClick={() => handleButtonClick(name)}
      >
        {name}
      </button>
    </>
  );
};
export default ItemBtn;
