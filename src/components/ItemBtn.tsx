import { type OrgButtonProps } from "../lib/types";

export const OrgButton = ({
  buttonClicked,
  // btn,
  onClick,
  children,
}: OrgButtonProps) => {
  //
  ////UI
  return (
    <>
      <button
        className={`${buttonClicked === children ? "active-btn" : undefined} item-btn`}
        onClick={() => onClick(children)}
      >
        {children}
      </button>
    </>
  );
};
