import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig";
import axios from "axios";

const stayListIndex = createAsyncThunk(
  'stayListSlice/stayListIndex',
  async (arg, thunkAPI) => {
    const state = thunkAPI.getState();

    const url = `${axiosConfig.BASE_URL}/searchStay2`
    const params = {
      serviceKey: axiosConfig.SERVICE_KEY,
      MobileOS : axiosConfig.MOBILE_OS,
      MobileApp: axiosConfig.MOBILE_APP,
      _type: axiosConfig.TYPE,
      arrange: axiosConfig.ARRANGE,
      numOfRows: axiosConfig.NUM_OF_ROWS,
      pageNo: state.stayList.page + 1,

    }
    const response = await axios.get(url, {params});

    return response.data.response.body;
  }
);

export { stayListIndex }