import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice/color';
import cartReducer from './cartSlice/cart';
import productsReducer from './productsSlice/products';

const store = configureStore({
  reducer: {
    color: colorReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;