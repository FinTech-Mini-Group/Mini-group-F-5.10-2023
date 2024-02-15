import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utilits/constant";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    products: builder.query({
      query: () => ({
        url: `/app/prod/`,
      }),
      providesTags: ["Product"],
    }),
    productInfo: builder.query({
        query: (id) => ({
          url: `/app/prod/${id}/`,
        }),
        providesTags: ["Product"],
      }),
  }),
});

export const { useProductsQuery, useProductInfoQuery } = productApi;
