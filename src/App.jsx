import { useTodos } from "./hooks/useTodos";
import InputTodo from "./components/InputTodo";
import TodoSummary from "./components/TodoSummary";
import TodoList from "./components/TodoList";

function App() {
  const { todos, addTodo, toggleComplete, editTodo, saveEdit, deleteTodo } = useTodos();

  return (
    <div className="max-w-2xl mx-auto px-4">
      <InputTodo onAddTodo={addTodo} />
      <TodoSummary todos={todos} />
      <TodoList todos={todos} onChangeCompleted={toggleComplete} onClickEdit={editTodo} onClickDelete={deleteTodo} onClickEditSave={saveEdit} />
    </div>
  );
}

export default App;
