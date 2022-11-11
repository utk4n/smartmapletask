export type TodoList = {
  subject: string;
  isCompleted: boolean;
  endDate: string;
};

export type TodoListState = {
  list: TodoList[];
  status: "loading" | "idle";
  error: string | null;
};
