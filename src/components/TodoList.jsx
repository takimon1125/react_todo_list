import TodoItem from "./TodoItem";
import EditTodoItem from "./EditTodoItem";
const TodoList = ({ todos, onChangeCompleted, onClickEdit, onClickDelete, onClickEditSave }) => {
  return (
    <>
      <ul>{todos.map((todo, index) => (todo.isEdited ? <EditTodoItem key={todo.id} todo={todo} index={index} onClickEditSave={onClickEditSave} /> : <TodoItem key={todo.id} todo={todo} index={index} onChangeCompleted={onChangeCompleted} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />))}</ul>
    </>
  );
};
export default TodoList;
