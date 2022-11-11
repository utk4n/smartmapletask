import useTodoSearchQuery from "./useTodoSearchQuery";
import { useAppDispatch } from "./useRedux";
import { useRef } from "react";
import { dragTodoItem } from "../redux/slices/todoListSlice";
const useDragAndDrop = () => {
  const dispatch = useAppDispatch();
  const { searchTodo } = useTodoSearchQuery();
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);
  const handleSort = () => {
    const newArr = [...searchTodo];
    const draggedItemContent = newArr.splice(dragItem.current, 1)[0];
    newArr.splice(dragOverItem.current, 0, draggedItemContent);
    dispatch(dragTodoItem(newArr));
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return { dragItem, dragOverItem, handleSort };
};

export default useDragAndDrop;
