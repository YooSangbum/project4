import { createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const existingItemIndex = state.findIndex(
        (item) => item.title === action.payload.title
      );
      if (existingItemIndex !== -1) {
        // 이미 존재하는 아이템일 경우 count를 증가시킵니다.
        state[existingItemIndex].count += Number(action.payload.count);
      } else if (state.length < 10) {
        // 새로운 아이템을 추가합니다.
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      let num = state.findIndex((a) => a.title === action.payload);
      state.splice(num, 1);
    },
  },
});

export let { addItem, deleteItem } = cart.actions;
export default cart;
