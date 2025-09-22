import { createSlice } from "@reduxjs/toolkit";
import { stayListIndex } from "../thunks/stayThunk";
import { localStorageUtil } from "../../utils/localStorageUtil";

const stayListSlice = createSlice({
  name: 'stayListSlice',
  initialState: {
    list: localStorageUtil.getStayList() ? localStorageUtil.getStayList() : [],
    page: localStorageUtil.getStayListPage() ? localStorageUtil.getStayListPage() : 0,
    scrollEventFlg: localStorageUtil.getStayListScrollFlg() ? localStorageUtil.getStayListScrollFlg() : true,
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: builder => {
    builder
    .addCase(stayListIndex.fulfilled, (state, action) => {
      if(action.payload.items?.item) {
        state.list = [...state.list, ...action.payload.items.item];
        state.page = action.payload.pageNo;
        state.scrollEventFlg = true;
        localStorageUtil.setStayList(state.list);
        localStorageUtil.setStayListPage(state.page);
        localStorageUtil.setStayListScrollFlg(state.scrollEventFlg);
      } else {
        state.scrollEventFlg = false;
      }
    })
    .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          console.log('처리중입니다.');
        }
    )
    .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.log('Error!', action.error);
        }
    );
  }
});

export const { setScrollEventFlg } = stayListSlice.actions;

export default stayListSlice.reducer;