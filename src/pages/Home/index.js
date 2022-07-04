import ProductCard from 'components/ProductCard';
import React from 'react';
import { useGetAllProductsQuery } from 'store/productsApi';
import AnimatedPage from 'components/AnimatedPage';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <section className="home">
      <AnimatedPage className="container home__container">
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>Error: {error}</h2>}
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
