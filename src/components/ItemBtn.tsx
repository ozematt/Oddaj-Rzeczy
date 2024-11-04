import { type ItemBtnProps } from "../lib/types";

export const ItemBtn = ({
  buttonClicked,
  btn,
  handleButtonClick,
}: ItemBtnProps) => {
  //
  ////UI
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
