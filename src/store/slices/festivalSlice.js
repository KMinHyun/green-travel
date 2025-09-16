import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk";
import { localStorageUtil } from "../../utils/localStorageUtil.js"

const festivalSLice = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: localStorageUtil.getFestivalList() ? localStorageUtil.getFestivalList() : [], // 페스티벌 리스트 저장
    page: localStorageUtil.getFestivalPage() ? localStorageUtil.getFestivalPage() : 0, // 현재 페이지 번호
    scrollEventFlg: localStorageUtil.getFestivalScrollFlg() ? localStorageUtil.getFestivalScrollFlg() : true, // 스크롤 이벤트 디바운싱 제어 플래그
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg=action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        // console.log(action.payload, action.type);
        // if(state.list !== null) {
        //   // 페이지 추가 처리
        //   state.list = [...state.list, ...action.payload.items.item];
        //   state.page = action.payload.pageNo;
        // } else {
        //   // 초기 페이지 처리
        //   state.list = action.payload.items.item;
        // }
        if(action.payload.items?.item) { // ? => items가 있을 때만 item을 찾아가자
          // state 재할당(저장)
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;
          // localStorage.setItem('festivalList', JSON.stringify(state.list));
          // localstorage 저장
          localStorageUtil.setFestivalList(state.list);
          localStorageUtil.setFestivalPage(state.page);
          localStorageUtil.setFestivalScrollFlg(state.scrollEventFlg);
        } else {
          state.scrollEventFlg = false;
        }
      })
      // .addMatcher(
      //   action => action.type.endsWith('/pending'),
      //   state => {
      //     console.log('처리중입니다.');
      //   }
      // )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.log('Error!', action.error);
        }
      );
  }
});

export const { setScrollEventFlg } = festivalSLice.actions;

export default festivalSLice.reducer;