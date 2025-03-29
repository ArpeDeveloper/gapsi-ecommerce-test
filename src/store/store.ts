import { configureStore } from "@reduxjs/toolkit";
import shoppingCarReducer from "./shoppingCarSlice";

export const store = configureStore({
  reducer: {
    shoppingCar: shoppingCarReducer,
  },
});
