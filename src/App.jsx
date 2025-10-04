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

  const onChangeCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      isCompleted: !todos[index].isCompleted,
      isEdited: todos[index].isEdited,
    };
    setTodos(newTodos);
  };

  const onClickEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      isCompleted: todos[index].isCompleted,
      isEdited: true,
    };
    setTodos(newTodos);
  };

  const onClickEditSave = (index, title) => {
    const newTodos = [...todos];
    newTodos[index] = {
      id: todos[index].id,
      title: title,
      isCompleted: todos[index].isCompleted,
      isEdited: false,
    };
    setTodos(newTodos);
  };

  const onClickDelete = (index) => {
    if (!confirm("本当によろしいですか？")) {
      return;
    }
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
