import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer, { getCartTotal } from './cartSlice';
import favoritesReducer from './favoriteSlice';
import { productsApi } from './productsApi';
import productReducer, { getProducts } from './productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware, logger),
});

store?.dispatch(getProducts());
store?.dispatch(getCartTotal());
