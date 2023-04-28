import { Link } from 'react-router-dom';

const Paginations = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
}) => {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="paginations">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <Link className="page-link">이전</Link>
      </button>
      <p className="page-num">{currentPage}</p>
      <button
        disabled={currentPage === pageNumbers}
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
      >
        <Link className="page-link">다음</Link>
      </button>
    </div>
  );
};

export default Paginations;
