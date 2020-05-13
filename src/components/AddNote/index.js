import React from "react";

export default function AddNote({ addTodo }) {
  let titleRef, contentRef;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(titleRef.value, contentRef.value);
    e.target.reset();
  };

  return (
    <div className="AddNote">
      <h1>TODO LIST</h1>
      <form className="AddNote_Input" onSubmit={(e) => onSubmitHandler(e)}>
        <label htmlFor="_title">Title</label>
        <input
          type="text"
          id="_title"
          name="title"
          ref={(el) => (titleRef = el)}
        >
        </input>
        <label htmlFor="_content">Content</label>
        <textarea id="_content" ref={(el) => (contentRef = el)}>
        </textarea>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
