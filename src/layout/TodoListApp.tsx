import AddNewTodo from "../components/TodoList/AddNewTodo";
import TodoList from "../components/TodoList/TodoList";
import style from "../styles/todoListApp.module.scss";
const TodoListApp = () => {
  return (
    <div className="todo-list-app">
      <div className={style.container}>
        <div>
          <h2>TO-DO LIST APP</h2>
        </div>
        <AddNewTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoListApp;
