import React, { useEffect, useState } from 'react';
import Button from '../Button';

const Pagination = ({ currentPage, setCurrentPage, data }) => {
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    setNumberOfPages(data && data.totalPages);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [data]);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const paginationHandler = pageIndex => {
    setCurrentPage(pageIndex);
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="pagination">
      {currentPage > 0 && (
        <Button buttonType="unset" className="pagination__arrow" onClick={previousPage}>
          {'<'}
        </Button>
      )}
      {pages.map((pageIndex, i) => (
        <Button
          key={i}
          buttonType={currentPage === i ? '' : 'outline'}
          onClick={() => paginationHandler(pageIndex)}
          className={`pagination__btn ${currentPage === i ? 'pagination__btn--active' : ''}`}
        >
          {pageIndex + 1}
        </Button>
      ))}
      {currentPage < numberOfPages - 1 && (
        <Button buttonType="unset" onClick={nextPage} className="pagination__arrow">
          {'>'}
        </Button>
      )}
    </div>
  );
};

export default Pagination;
