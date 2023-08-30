import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const response = await axios.get(
      "https://64c10995fa35860bae9fd16b.mockapi.io/Cart",
    );
    return response.data;
  },
);

interface CartItem {
  id: string;
  color: string;
  imageFront: string;
  imageBack: string;
  category: string;
  desc: string;
}

interface CartState {
  items: CartItem[];
  loading: boolean;
}

const initialState: CartState = {
  items: [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action: PayloadAction<string>): void => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCartItems.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
