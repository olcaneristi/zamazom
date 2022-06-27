import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { productsApi } from './productsApi';
import productReducer, { getProducts } from './productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware, logger),
});

store?.dispatch(getProducts());
