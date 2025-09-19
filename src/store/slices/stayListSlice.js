import { createSlice } from "@reduxjs/toolkit";

const stayListSlice = createSlice({
  name: 'stayListSlice',
  initialState: {
    list: [],
    page: 0,
    scrollEventFlg: true,
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  }
})

export const { setScrollEventFlg } = stayListSlice.actions;

export default stayListSlice.reducer;