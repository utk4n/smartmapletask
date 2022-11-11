import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewsState, News } from "../../types/newsDataTypes";

export const getNewsData = createAsyncThunk<News[]>(
  "news/getNewsData",
  async (_, thunkApi) => {
    try {
      const response = await fetch("/data/news.json");
      const result = await response.json();
      return result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState: NewsState = {
  list: [],
  error: null,
  status: "idle",
  showDetails: false,
  showDetailsContent: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    openDetails: (state) => {
      state.showDetails = true;
    },
    closeDetails: (state) => {
      state.showDetails = false;
    },
    findNews: (state, action: PayloadAction<number>) => {
      const findNewsInList = state.list.find(
        (_, index) => index === action.payload
      );
      state.showDetailsContent = findNewsInList;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getNewsData.fulfilled,
        (state, action: PayloadAction<News[]>) => {
          state.status = "idle";
          state.list = action.payload;
        }
      )
      .addCase(getNewsData.rejected, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});
export const { openDetails, closeDetails, findNews } = newsSlice.actions;
export default newsSlice.reducer;
