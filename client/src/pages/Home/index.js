import ProductCard from 'components/ProductCard';
import React, { useEffect, useState, useRef } from 'react';
import { useGetAllProductsQuery } from 'store/productsApi';
import Loader from 'components/Loader';

const Home = () => {
  const [page, setPage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const { data, error, isFetching } = useGetAllProductsQuery(page);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    setNumberOfPages(data && data.totalPages);
  }, [data]);

  const paginationHandler = pageIndex => {
    setPage(pageIndex);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (error) {
    return (
      <div>
        <h1>{error.error}</h1>
      </div>
    );
  }

  return (
    <section className="home">
      {isFetching && (
        <div style={{ minHeight: '90vh' }}>
          <Loader haveBackground />
        </div>
      )}

      <div className="container home__container">
        {data && (
          <div className="home__product__container">
            <ul className="home__product__list">
              {data?.products?.map(product => (
                <ProductCard data={product} key={product.id} />
              ))}
            </ul>
          </div>
        )}
      </div>

      <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Page {page + 1} of {numberOfPages}
      </h3>

      <div className="home__pagination">
        {pages.map((pageIndex, i) => (
          <button
            key={i}
            onClick={() => paginationHandler(pageIndex)}
            className="home__pagination__btn"
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Home;
