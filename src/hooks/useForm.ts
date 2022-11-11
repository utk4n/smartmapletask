import { useRef } from "react";
import { useAppDispatch } from "./useRedux";
import { addTodo } from "../redux/slices/todoListSlice";
import dayjs from "dayjs";
const useForm = () => {
  const dispatch = useAppDispatch();
  const realDate = dayjs().format("YYYY-MM-DD");
  const inputRef = useRef<HTMLInputElement | any>(null);
  const formHandle = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<SVGElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const newTodo = {
      subject: inputRef.current?.value,
      isCompleted: false,
      endDate: realDate,
    };
    dispatch(addTodo(newTodo));
    inputRef.current.value = "";
  };

  return { formHandle, inputRef };
};

export default useForm;
