const TodoSummary = ({ todos }) => {
  return (
    <div className="flex m-3 ">
      <p className="mr-3">
        全てのタスク：
        {todos.length}
      </p>
      <p className="mr-3">
        完了済み：
        {
          todos.filter((todo) => {
            return todo.isCompleted;
          }).length
        }
      </p>
      <p className="mr-3">
        未完了：
        {
          todos.filter((todo) => {
            return !todo.isCompleted;
          }).length
        }
      </p>
    </div>
  );
};

export default TodoSummary;
