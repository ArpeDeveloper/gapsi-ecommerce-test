import { createSlice } from "@reduxjs/toolkit";
import { ShoppingCarItem, Product } from "../models/Product";

const initialState: ShoppingCarItem[] = []

const shoppingCarSlice = createSlice({
  name: "shoppingCar",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const product: Product = action.payload;
      const existingItem = state.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          return state.filter(item => item.id !== product.id);
        }
      }
    },
  },
});

export const { addItem, removeItem } = shoppingCarSlice.actions;
export default shoppingCarSlice.reducer;
