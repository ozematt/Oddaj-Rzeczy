import { type PageNumberProps } from "../lib/types";

export default function PageNumber({
  page,
  currentPage,
  pages,
  handlePageChange,
}: PageNumberProps) {
  //
  ////UI
  return (
    <>
      <li
        className={`${page === currentPage ? "active" : ""} ${pages.length === 1 ? "hidden" : ""} page-number`}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </li>
    </>
  );
}
