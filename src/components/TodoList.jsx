import TodoItem from "./TodoItem";
import EditTodoItem from "./EditTodoItem";
const TodoList = ({ todos, onChangeCompleted, onClickEdit, onClickDelete, onClickEditSave }) => {
  return (
    <>
      <ul>{todos.map((todo) => (todo.isEdited ? <EditTodoItem key={todo.id} todo={todo} onClickEditSave={onClickEditSave} /> : <TodoItem key={todo.id} todo={todo} onChangeCompleted={onChangeCompleted} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />))}</ul>
    </>
  );
};
export default TodoList;
