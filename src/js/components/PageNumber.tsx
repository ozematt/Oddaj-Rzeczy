const PageNumber = ({
  page,
  currentPage,
  pages,
  handlePageChange,
}: {
  page: number;
  currentPage: number;
  pages: number[];
  handlePageChange: (page: number) => void;
}) => {
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
};
export default PageNumber;
