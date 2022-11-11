import { useAppDispatch } from "./useRedux";
import { completeTodo } from "../redux/slices/todoListSlice";
const useCompleteTodo = () => {
  const dispatch = useAppDispatch();

  const completeTodoHandle = (idx: number): void => {
    dispatch(completeTodo(idx));
  };

  return completeTodoHandle;
};

export default useCompleteTodo;
