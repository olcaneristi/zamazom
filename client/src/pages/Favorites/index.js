import { AnimatedPage, InfoContainer, ProductCard } from 'components';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import noFavoritesData from 'assets/lotties/no-favorites-found.json';

const Favorites = () => {
  const state = useSelector(state => state.favorites);
  const [favoritesData, setFavoritesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavoritesData(state.favorites);
  }, [favoritesData, state, dispatch]);

  return (
    <AnimatedPage className={`favorites ${favoritesData.length === 0 ? 'empty' : ''}`}>
      <div className="container">
        {favoritesData.length === 0 ? (
          <InfoContainer
            animation={noFavoritesData}
            title="Your favorites are currently empty."
            description="Looks like you haven't liked any product yet.."
          />
        ) : (
          <>
            <h2 className="favorites__title">Your Favorites</h2>
            <ul className="favorites__list">
              {favoritesData?.map(item => (
                <ProductCard data={item} key={item?.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Favorites;
