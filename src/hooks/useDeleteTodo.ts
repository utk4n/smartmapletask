import { useAppDispatch } from "./useRedux";
import { deleteTodo } from "../redux/slices/todoListSlice";

const useDeleteTodo = () => {
  const dispatch = useAppDispatch();
  const deleteTargetTodo = (idx: number): void => {
    dispatch(deleteTodo(idx));
  };

  return deleteTargetTodo;
};

export default useDeleteTodo;
