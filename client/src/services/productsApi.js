import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from './api';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: builder => ({
    getAllProducts: builder.query({
      query: (page = 0) => `api/products?page=${page}`,
    }),
    getProductById: builder.query({
      query: slug => `api/products/${slug}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
