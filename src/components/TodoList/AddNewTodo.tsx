import { AiOutlinePlus } from "react-icons/ai";
import useForm from "../../hooks/useForm";
const AddNewTodo = () => {
  const { formHandle, inputRef } = useForm();

  return (
    <form onSubmit={formHandle}>
      <input ref={inputRef} type="text" placeholder="Do something..." />
      <AiOutlinePlus onClick={formHandle} />
    </form>
  );
};

export default AddNewTodo;
