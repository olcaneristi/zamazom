import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from './api';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: builder => ({
    getAllProducts: builder.query({
      query: () => 'products',
    }),
    getProductById: builder.query({
      query: slug => `products/${slug}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
