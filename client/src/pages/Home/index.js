import ProductCard from 'components/ProductCard';
import React from 'react';
import { useGetAllProductsQuery } from 'store/productsApi';
import AnimatedPage from 'components/AnimatedPage';
import SkeletonProduct from 'components/SkeletonProduct';

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
      <AnimatedPage className="container home__container">
        {isLoading && <SkeletonProduct />}
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
