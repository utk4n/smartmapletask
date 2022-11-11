import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../slices/weatherSlice";
import newsSlice from "../slices/newsSlice";
import todoListSlice from "../slices/todoListSlice";
export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    news: newsSlice,
    todos: todoListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
