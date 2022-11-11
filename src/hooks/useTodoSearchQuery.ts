import { useMemo, useState } from "react";
import useGetTodoListData from "./useGetTodoListData";
const useTodoSearchQuery = () => {
  const [query, setQuery] = useState("");
  const todos = useGetTodoListData();

  const searchTodo = useMemo(
    () =>
      todos.filter((todo) =>
        todo.subject.toLowerCase().includes(query.toLowerCase())
      ),
    [query, todos]
  );

  console.log(searchTodo);

  return { searchTodo, setQuery, query };
};

export default useTodoSearchQuery;
