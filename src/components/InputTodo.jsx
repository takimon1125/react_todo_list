import { useState } from "react";

const InputTodo = ({ onAddTodo }) => {
  const [inputTodo, setInputTodo] = useState("");
  const onClick = () => {
    const inputTodoTrim = inputTodo.trim();
    if (inputTodoTrim === "") {
      return;
    }
    onAddTodo(inputTodoTrim);
    setInputTodo("");
  };
  return (
    <div className="flex justify-between items-center mt-5">
      <input type="text" onChange={(e) => setInputTodo(e.target.value)} value={inputTodo} className="flex-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
      <button onClick={onClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
        保存
      </button>
    </div>
  );
};

export default InputTodo;
