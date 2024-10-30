export const ItemBtn = ({
  buttonClicked,
  btn,
  handleButtonClick,
}: {
  buttonClicked: string;
  btn: string;
  handleButtonClick: (btn: string) => void;
}) => {
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
