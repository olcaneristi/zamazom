import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer, { getCartTotal } from './slices/cartSlice';
import favoritesReducer from './slices/favoriteSlice';
import authReducer, { authUser } from './slices/authSlice';
import { productsApi } from './api/productsApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware, logger),
});

store?.dispatch(getCartTotal());
store?.dispatch(authUser(null));
