import React, { useEffect, useState } from 'react';

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
        <button className="home__pagination__btn" onClick={previousPage}>
          {'<'}
        </button>
      )}
      {pages.map((pageIndex, i) => (
        <button
          key={i}
          onClick={() => paginationHandler(pageIndex)}
          className={`home__pagination__btn ${
            currentPage === i ? 'home__pagination__btn--active' : ''
          }`}
        >
          {pageIndex + 1}
        </button>
      ))}
      {currentPage < numberOfPages - 1 && (
        <button onClick={nextPage} className="home__pagination__btn">
          {'>'}
        </button>
      )}
    </div>
  );
};

export default Pagination;
