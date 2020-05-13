import React from "react";

export default function Notes({ todos, filter, changeFilter, changeStatus }) {
  return (
    <div className="NoteApp">
      <h1>Notes</h1>
      <button onClick={() => changeFilter("active")}>Show Active Notes</button>
      <button onClick={() => changeFilter("delete")}>Show Deleted Notes</button>
      <ul>
        {todos.map(
          (todo) =>
            todo.status === filter && (
              <li key={todo.id}>
                {todo.title}
                {todo.status === "active" ? (
                  <button onClick={() => changeStatus(todo.id, "delete")}>
                    DELETE
                  </button>
                ) : (
                  <button onClick={() => changeStatus(todo.id, "active")}>
                    ACTIVE
                  </button>
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
}
