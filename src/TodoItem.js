export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span className="todo-item-text">{title}</span>
      </label>
    </li>
  );
}