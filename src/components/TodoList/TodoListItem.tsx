import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import style from "../../styles/todoListApp.module.scss";
import useCompleteTodo from "../../hooks/useCompleteTodo";
import useEditTodo from "../../hooks/useEditTodo";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import { TodoList } from "../../types/todoListDataTypes";

const TodoListItem = ({
  todo,
  idx,
  dragOverItem,
  dragItem,
  handleSort,
}: {
  todo: TodoList;
  idx: number;
  dragOverItem: any;
  dragItem: any;
  handleSort: any;
}) => {
  const deleteTargetTodo = useDeleteTodo();
  const { openEditInp, todoIDX, selectTodoIdx, editTodoSubject } =
    useEditTodo();
  const completeTodoHandle = useCompleteTodo();
  return (
    <li
      draggable
      onDragStart={() => (dragItem.current = idx)}
      onDragEnter={() => (dragOverItem.current = idx)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
      className={`${style.todo_list__todo_item} ${
        todo.isCompleted ? style.todo_list__todo_item_active : null
      }`}
      key={idx}
    >
      {openEditInp && todoIDX === idx ? (
        <input
          className={style.todo_list__todo_item_edit_input}
          type="text"
          defaultValue={todo.subject}
          onChange={editTodoSubject}
        />
      ) : (
        <p onClick={() => completeTodoHandle(idx)}>{todo.subject} </p>
      )}
      <span>
        <AiOutlineEdit onClick={() => selectTodoIdx(idx)} />
        <AiOutlineDelete onClick={() => deleteTargetTodo(idx)} />
      </span>
    </li>
  );
};

export default TodoListItem;
