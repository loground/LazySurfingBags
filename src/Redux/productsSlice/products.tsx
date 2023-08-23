//Redux
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
//Axios
import axios from "axios";

interface BagItem {
  title: string;
  imageUrl: string;
  price: string;
  id: string;
  audioSrc: string;
}

export const fetchBagCategories = createAsyncThunk<BagItem[]>(
  "products/fetchBagCategories",
  async () => {
    const response = await axios.get<BagItem[]>(
      "https://6481ccc629fa1c5c50321a8b.mockapi.io/Pizza/Bags",
    );
    return response.data;
  },
);

const initialState: { bagCategories: BagItem[]; isLoading: boolean } = {
  bagCategories: [],
  isLoading: true,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBagCategories.pending, (state) => {
        state.isLoading = true;
        console.log("загружаю");
      })
      .addCase(fetchBagCategories.fulfilled, (state, action) => {
        state.bagCategories = action.payload; 
        state.isLoading = false;
        console.log("загружено");
      })
      .addCase(fetchBagCategories.rejected, (state) => {
        state.isLoading = false;
        console.log("у тебя ошибка");
      });
  },
});

export const selectBagCategories = (state: RootState) =>
  state.products.bagCategories;
export const selectLoadingStatus = (state: RootState) =>
  state.products.isLoading;

export default productsSlice.reducer;
