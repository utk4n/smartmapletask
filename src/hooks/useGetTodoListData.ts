import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./useRedux";
import { getTodoListData } from "../redux/slices/todoListSlice";
const useGetTodoListData = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.list);
  useEffect(() => {
    dispatch(getTodoListData());
  }, [dispatch]);

  return todos;
};

export default useGetTodoListData;
