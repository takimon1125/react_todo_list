const TodoItem = ({ todo, onChangeCompleted, onClickEdit, onClickDelete }) => {
  return (
    <>
      <li key={todo.id} className="flex justify-between items-center border rounded p-2 my-2">
        <input type="checkbox" name="todo-complete" checked={todo.isCompleted} onChange={() => onChangeCompleted(todo.id)} />
        <p className="flex-1 break-words ml-2">{todo.title}</p>
        <div>
          <button onClick={() => onClickEdit(todo.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            編集
          </button>
          <button onClick={() => onClickDelete(todo.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
            削除
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
