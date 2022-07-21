import ProductCard from 'components/ProductCard';
import React, { useState } from 'react';
import { useGetAllProductsQuery } from 'services/productsApi';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination';

const Home = () => {
  const [page, setPage] = useState(0);
  const { data, error, isFetching } = useGetAllProductsQuery(page);

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

      <Pagination currentPage={page} setCurrentPage={setPage} data={data} />
    </section>
  );
};

export default Home;
