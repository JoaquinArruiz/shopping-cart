import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ItemInterface } from "../../inventory";

export interface CartItemInterface {
  item: ItemInterface;
  qty: number;
}

const initialState: any = { content: [], total: 0, totalQty: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: any, action) => {
      let item = action.payload;
      let foundItem = false;

      state.content.forEach((cartItem: CartItemInterface) => {
        if (cartItem.item.id === item.id) {
          cartItem.qty++;
          state.total += item.price;
          foundItem = true;
          state.totalQty++;
        }
      });

      if (!foundItem) {
        let newCartItem: CartItemInterface = { item: item, qty: 1 };
        state.content.push(newCartItem);
        state.total += action.payload.price;
        state.totalQty++;
      }
    },
    decrement: (state: any, action) => {
      let item = action.payload;
      let itemIndex = -1;
      state.content.forEach((cartItem: CartItemInterface, index: number) => {
        if (cartItem.item.id === item.id) itemIndex = index;
      });

      if (itemIndex !== -1) {
        if (state.content[itemIndex].qty > 0) {
          state.content[itemIndex].qty--;
          state.total -= item.price;
          state.totalQty--;
        }
      }
    },
    clear: (state: any) => {
      const newState: any = { content: [], total: 0, totalQty: 0 };
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
