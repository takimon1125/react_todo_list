import { useState, useCallback } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((title) => {
    if (!title.trim()) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        isCompleted: false,
        isEdited: false,
      },
    ]);
  }, []);

  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  }, []);

  const editTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, isEdited: true } : todo)));
  }, []);

  const saveEdit = useCallback((id, title) => {
    if (!title.trim()) return;

    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, title: title.trim(), isEdited: false } : todo)));
  }, []);

  const deleteTodo = useCallback((id) => {
    if (!confirm("本当によろしいですか？")) {
      return;
    }
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    toggleComplete,
    editTodo,
    saveEdit,
    deleteTodo,
  };
};
