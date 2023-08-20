import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice/color';
import cartReducer from './cartSlice/cart'

export const store = configureStore({
  reducer: {color: colorReducer,
  cart: cartReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;