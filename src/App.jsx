import { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodoSummary from "./components/TodoSummary";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const onClickSave = (title) => {
    if (title === "") {
      return;
    }
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: title,
        isCompleted: false,
        isEdited: false,
      },
    ]);
  };

  const onChangeCompleted = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  };

  const onClickEdit = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEdited: true } : todo)));
  };

  const onClickEditSave = (id, title) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: title, isEdited: false } : todo)));
  };

  const onClickDelete = (id) => {
    if (!confirm("本当によろしいですか？")) {
      return;
    }
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <InputTodo onClickSave={onClickSave} />
      <TodoSummary todos={todos} />
      <TodoList todos={todos} onChangeCompleted={onChangeCompleted} onClickEdit={onClickEdit} onClickDelete={onClickDelete} onClickEditSave={onClickEditSave} />
    </div>
  );
}

export default App;
