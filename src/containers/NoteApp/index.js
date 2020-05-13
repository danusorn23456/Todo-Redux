import React from "react";
import AddNote from "../../components/AddNote";
import Notes from "../../components/Notes";
import { connect } from "react-redux";

const NoteApp = ({ todos, filter, changeFilter, addTodo, changeStatus }) => {
  return (
    <>
      <AddNote addTodo={addTodo} />
      <Notes
        todos={todos}
        filter={filter}
        changeStatus={changeStatus}
        changeFilter={changeFilter}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (filter) => dispatch({ type: "CHANGE_FILTER",filter:filter }),
    addTodo: (title, content) =>
      dispatch({
        type: "ADD_TODO",
        payload: {
          title: title,
          content: content,
          createAt: new Date().toLocaleString(),
          status: "active",
        },
      }),
    changeStatus: (id,status) => dispatch({ type: "CHANGE_STATUS", payload:{id: id,status:status} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteApp);
