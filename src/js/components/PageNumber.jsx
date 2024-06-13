// eslint-disable-next-line react/prop-types
const PageNumber = ({ item, currentPage, pages, handlePageChange }) => {
  return (
    <>
      <li
        className={`${item === currentPage ? "active" : ""} ${pages.length === 1 ? "hidden" : ""} page-number`}
        onClick={() => handlePageChange(item)}
      >
        {item}
      </li>
    </>
  );
};
export default PageNumber;
