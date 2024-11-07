import { type PageNumberProps } from "../lib/types";

export const PageNumber = ({
  page,
  currentPage,
  pages,
  onPageChange,
}: PageNumberProps) => {
  //
  ////UI
  return (
    <>
      <li
        className={`${page === currentPage ? "active" : ""} ${pages.length === 1 ? "hidden" : ""} page-number`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </li>
    </>
  );
};
