// eslint-disable-next-line react/prop-types
const PageNumber = ({ page, currentPage, pages, handlePageChange }) => {
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
