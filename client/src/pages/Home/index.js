import ProductCard from 'components/ProductCard';
import React from 'react';
import { useGetAllProductsQuery } from 'store/productsApi';
import AnimatedPage from 'components/AnimatedPage';
import Loader from 'components/Loader';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (error) {
    return (
      <div>
        <h1>{error.error}</h1>
      </div>
    );
  }

  return (
    <section className="home">
      {isLoading && (
        <div style={{ minHeight: '90vh' }}>
          <Loader />
        </div>
      )}

      <AnimatedPage className="container home__container">
        {data && (
          <div className="home__product__container">
            <ul className="home__product__list">
              {data.map(product => (
                <ProductCard data={product} key={product.id} />
              ))}
            </ul>
          </div>
        )}
      </AnimatedPage>
    </section>
  );
};

export default Home;
