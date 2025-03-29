import { configureStore } from "@reduxjs/toolkit"
import shoppingCarReducer from "./shoppingCarSlice"

export const store = configureStore({
  reducer: {
    shoppingCar: shoppingCarReducer,
  },
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
