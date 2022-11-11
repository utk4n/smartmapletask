import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoList, TodoListState } from "../../types/todoListDataTypes";
import axios from "axios";
export const getTodoListData = createAsyncThunk<TodoList[]>(
  "todos/getTodoListData",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/data/todoListTasks.json");
      const result = response.data;
      return result;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState: TodoListState = {
  list: [],
  error: null,
  status: "idle",
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const newState = state.list.filter((_, idx) => idx !== action.payload);
      state.list = newState;
    },
    editTodo: (state, action) => {
      state.list = action.payload;
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      state.list.map((todo, idx) =>
        idx === action.payload ? (todo.isCompleted = !todo.isCompleted) : todo
      );
    },
    dragTodoItem: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodoListData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getTodoListData.fulfilled,
        (state, action: PayloadAction<TodoList[]>) => {
          state.status = "idle";
          state.list = action.payload;
        }
      )
      .addCase(
        getTodoListData.rejected,
        (state, action: PayloadAction<any>) => {
          state.status = "idle";
          state.error = action.payload;
        }
      );
  },
});
export const { addTodo, deleteTodo, completeTodo, editTodo, dragTodoItem } =
  todoListSlice.actions;
export default todoListSlice.reducer;
