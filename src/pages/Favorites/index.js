import AnimatedPage from 'components/AnimatedPage';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Favorites = () => {
  const state = useSelector(state => state.favorites);
  const [favoritesData, setFavoritesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavoritesData(state.favorites);
  }, [favoritesData, state, dispatch]);

  return (
    <AnimatedPage>
      {favoritesData?.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          {item.color && <p>Color: {item.color.name}</p>}
        </div>
      ))}
    </AnimatedPage>
  );
};

export default Favorites;
