import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import { categoryApi } from "../services/categoryApi";

const combinedReducer = {
  [productApi.reducerPath]: productApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
};

export default configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      categoryApi.middleware,
    ),
});