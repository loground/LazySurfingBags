import { createSlice } from '@reduxjs/toolkit';

const initialState = {
color: "Yellow",
}

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColor: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;