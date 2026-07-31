import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    addItem: (state, action) => {
      let exist = false;
      const price = +(action.payload.discountPrice > 0
        ? action.payload.discountPrice
        : action.payload.salesPrice);

      state.totalPrice += price;
      state.items = state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.cartQuantity++;
          exist = true;
        }
        return item;
      });
      if (!exist) {
        state.items.push({ ...action.payload, cartQuantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        const price =
          item.discountPrice > 0 ? item.discountPrice : item.salesPrice;

        if (item.id == action.payload) {
          state.totalPrice -= price;
          item.cartQuantity--;
          if (item.cartQuantity == 0) {
            return false;
          }
        }
        return item;
      });
    },
  },
});
export const { addItem, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
