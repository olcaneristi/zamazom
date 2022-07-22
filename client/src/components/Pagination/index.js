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
    <div className="home__pagination__items">
      {currentPage > 0 && (
        <Button buttonType="unset" className="home__pagination__arrow" onClick={previousPage}>
          {'<'}
        </Button>
      )}
      {pages.map((pageIndex, i) => (
        <Button
          key={i}
          buttonType={currentPage === i ? '' : 'outline'}
          onClick={() => paginationHandler(pageIndex)}
          className={`home__pagination__btn ${
            currentPage === i ? 'home__pagination__btn--active' : ''
          }`}
        >
          {pageIndex + 1}
        </Button>
      ))}
      {currentPage < numberOfPages - 1 && (
        <Button buttonType="unset" onClick={nextPage} className="home__pagination__arrow">
          {'>'}
        </Button>
      )}
    </div>
  );
};

export default Pagination;
