import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { editTodo } from "../redux/slices/todoListSlice";
const useEditTodo = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.list);
  const [openEditInp, setOpenEditInp] = useState(false);
  const [todoIDX, setTodoIdx] = useState<number | null>(null);
  const selectTodoIdx = (idx: number): void => {
    if (!openEditInp) {
      setTodoIdx(idx);
      setOpenEditInp(true);
    } else {
      setOpenEditInp(false);
    }
  };

  const editTodoSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    const editedValue = todos.map((todo, index) => {
      if (index === todoIDX) {
        return {
          ...todo,
          subject: e.target.value,
        };
      } else {
        return todo;
      }
    });
    dispatch(editTodo(editedValue));
  };

  return { openEditInp, todoIDX, selectTodoIdx, editTodoSubject };
};

export default useEditTodo;
