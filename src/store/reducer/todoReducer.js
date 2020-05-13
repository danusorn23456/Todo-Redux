const initailState = {
  filter: 'active',
  todos: [
    {
      id: 1,
      title: "Play game",
      content: "Play CODT",
      createAt: "13/5/2563 09:44:20",
      status: 'active',
    },
    {
      id: 2,
      title: "Design Website",
      content: "Use Figma",
      createAt: "13/5/2563 09:44:21",
      status: 'active',
    },
    {
      id: 3,
      title: "DO the Project",
      content: "React redux Project",
      createAt: "13/5/2563 09:44:22",
      status: 'delete',
    },
  ],
};

const todoReducer = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newId = state.todos.length + 1;
      const newTodos = Object.assign(action.payload, { id: newId });
      return {...state,todos: state.todos.concat(newTodos),
      };

    case "CHANGE_STATUS":
      return {
        ...state,
        todos: [...state.todos].map((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
          }
          return todo;
        }),
      };

    case "CHANGE_FILTER":
      return Object.assign({ ...state }, { filter: action.filter });

    default:
      return state;
  }
};

export default todoReducer;
