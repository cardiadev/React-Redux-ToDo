import {
  UPDATE_VALUE,
  SAVE_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED
} from "../actions/actionTypes.js";

const INITIAL_STATE = {
  value: "",
  todos: []
};

export default (state = INITIAL_STATE, action) => {
  const todos = JSON.parse(JSON.stringify(state.todos));
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      };
    case SAVE_TODO:
      return state.value
        ? {
            ...state,
            value: "",
            todos: [
              ...state.todos,
              {
                value: state.value,
                completed: false
              }
            ]
          }
        : state;
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (currentValue, index) => action.payload !== index
        )
      };

    case TOGGLE_COMPLETED:
      todos[action.payload].completed = !todos[action.payload].completed;
      return {
        ...state,
        todos
      };
    // End of Swith
    default:
      return state;
  }
};
