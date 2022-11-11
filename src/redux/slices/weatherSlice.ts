import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherState, Weather } from "../../types/weatherDataTypes";
import type { PayloadAction } from "@reduxjs/toolkit";
export const getWeatherData = createAsyncThunk<Weather[]>(
  "weather/getWeatherData",
  async (_, thunkApi) => {
    try {
      const response = await fetch("/data/wheatherData.json");
      const result = await response.json();
      return result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState: WeatherState = {
  list: [],
  error: null,
  status: "idle",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getWeatherData.fulfilled,
        (state, action: PayloadAction<Weather[]>) => {
          state.status = "idle";
          state.list = action.payload;
        }
      )
      .addCase(getWeatherData.rejected, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
