const ItemBtn = ({ buttonClicked, btn, handleButtonClick }) => {
  return (
    <>
      <button
        className={`${buttonClicked === btn ? "active-btn" : undefined} item-btn`}
        onClick={() => handleButtonClick(btn)}
      >
        {btn}
      </button>
    </>
  );
};
export default ItemBtn;
