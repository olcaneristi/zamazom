import React from 'react';
import { useGetAllProductsQuery } from 'store/productsApi';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <section className="home">
      <div className="container home__container">
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>Error: {error}</h2>}
        {data && (
          <ul className="home__list">
            {data.map(product => (
              <li key={product.id} className="home__item">
                <img src={product.image} alt={product.name} width={300} height={300} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}$</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Home;
