import { configureStore } from '@reduxjs/toolkit';
import cart from './store/cartStore';

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
