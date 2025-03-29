import { createSlice } from "@reduxjs/toolkit"
import { ShoppingCarItem } from "../models/Product"

const initialState: ShoppingCarItem[] = []

const shoppingCarSlice = createSlice({
  name: "shoppingCar",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload
      const existingItem = state.find(item => item.id === productId)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ id: productId, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload
      const existingItem = state.find(item => item.id === productId)
      if (existingItem) {
        existingItem.quantity -= 1
        if (existingItem.quantity <= 0) {
          return state.filter(item => item.id !== productId)
        }
      }
    },
    clearCar: () => {
      return initialState
    }

  },
})

export const { addItem, removeItem, clearCar } = shoppingCarSlice.actions
export default shoppingCarSlice.reducer
