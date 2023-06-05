import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  function handleInputChange(e) {
    setNewItem(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newItem}
          onChange={handleInputChange}
          type="text"
          id="item"
          placeholder="What needs to be done?"
          className="maininput"
        />
      </div>
    </form>
  );
}
