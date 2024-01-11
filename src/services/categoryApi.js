import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utilits/constant";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    categorys: builder.query({
      query: () => ({
        url: `/app/ctg/`,
      }),
      providesTags: ["Category"],
    }),
  }),
});

export const {useCategorysQuery} = categoryApi;
