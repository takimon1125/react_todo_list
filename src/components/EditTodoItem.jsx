import { useState } from "react";

const EditTodoItem = ({ todo, onClickEditSave }) => {
  const [inputTitle, setInputTitle] = useState(todo.title);
  return (
    <>
      <li key={todo.id} className="flex justify-between items-center border p-2">
        <input type="text" onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} className="flex-1 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        <button onClick={() => onClickEditSave(todo.id, inputTitle)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
          保存
        </button>
      </li>
    </>
  );
};
export default EditTodoItem;
