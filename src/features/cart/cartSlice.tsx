import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState: any = { content: [], total: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: any, action) => {
      state.content.push(action.payload);
      state.total += action.payload.price;
    },
    decrement: (state: any, action) => {
      let index = -1;
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i].name === action.payload.name) {
          console.log(index)
          index = i;
          break;
        }
      }
      if (index !== -1) {
        state.total -= state.content[index].price;
        state.content.splice(index, 1);
      }
    },
    clear: (state: any) => {
      const newState: any = { content: [], total: 0 };
      state = newState;
      return state;
    },
  },
});

export const { increment, decrement, clear } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
