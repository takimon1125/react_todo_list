import { useMemo } from "react";

const TodoSummary = ({ todos }) => {
  const { total, completed, pending } = useMemo(
    () => ({
      total: todos.length,
      completed: todos.filter((todo) => todo.isCompleted).length,
      pending: todos.filter((todo) => !todo.isCompleted).length,
    }),
    [todos]
  );

  return (
    <div className="flex m-3">
      <p className="mr-3">全てのタスク：{total}</p>
      <p className="mr-3">完了済み：{completed}</p>
      <p className="mr-3">未完了：{pending}</p>
    </div>
  );
};

export default TodoSummary;
