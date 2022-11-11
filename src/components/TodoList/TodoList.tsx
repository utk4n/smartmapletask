import style from "../../styles/todoListApp.module.scss";
import TodoListItem from "./TodoListItem";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useGetTodoListData from "../../hooks/useGetTodoListData";
import { useMemo, useState } from "react";
const TodoList = () => {
  const todos = useGetTodoListData();

  const [query, setQuery] = useState("");
  const { dragItem, dragOverItem, handleSort } = useDragAndDrop();
  const searchTodo = useMemo(
    () =>
      todos.filter((todo) =>
        todo.subject.toLowerCase().includes(query.toLowerCase())
      ),
    [query, todos]
  );

  return (
    <ul className={style.todo_list_container}>
      <input
        className={style.todo_list_container__search_input}
        type="search"
        placeholder="Search something..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {searchTodo.map((todo, idx) => (
        <TodoListItem
          key={idx}
          todo={todo}
          idx={idx}
          dragItem={dragItem}
          dragOverItem={dragOverItem}
          handleSort={handleSort}
        />
      ))}
    </ul>
  );
};

export default TodoList;
