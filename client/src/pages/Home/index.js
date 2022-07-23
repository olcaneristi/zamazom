import React, { useState } from 'react';
import { useGetAllProductsQuery } from 'services/api/productsApi';
import { Loader, InfoContainer, Pagination, ProductCard } from 'components';
import fetchError from 'assets/lotties/fetch-error.json';

const Home = () => {
  const [page, setPage] = useState(0);
  const { data, error, isFetching } = useGetAllProductsQuery(page);

  if (error) {
    const reloadHandler = () => {
      window.location.reload();
    };
    return (
      <div className="error">
        <InfoContainer
          animation={fetchError}
          title={error.error}
          reload
          reloadRequest={reloadHandler}
          reloadText="Try Again"
        />
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

      <Pagination currentPage={page} setCurrentPage={setPage} data={data} />
    </section>
  );
};

export default Home;
