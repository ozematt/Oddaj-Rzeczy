import { type OrgButtonProps } from "../lib/types";

export const OrgButton = ({
  activeButton,
  onClick,
  children,
}: OrgButtonProps) => {
  //
  ////UI
  return (
    <>
      <button
        className={`${activeButton === children ? "active-btn" : undefined} item-btn`}
        onClick={() => onClick(children)}
      >
        {children}
      </button>
    </>
  );
};
