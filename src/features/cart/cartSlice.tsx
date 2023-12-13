import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState: Array<any> = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: Array<any>, action) => {
      state.push(action.payload)
    },
  },
})

export const { increment } = cartSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
