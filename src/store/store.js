import { configureStore } from "@reduxjs/toolkit";
import festivalReducer from './slices/festivalSlice.js';
import festivalShowReducer from './slices/festivalShowSlice.js';
import stayListReducer from './slices/stayListSlice.js';
import stayDetailReducer from './slices/stayDetailSlice.js';

export default configureStore({
  reducer: {
    festival: festivalReducer,
    festivalShow: festivalShowReducer,
    stayList: stayListReducer,
    stayDetail: stayDetailReducer,
  }
});