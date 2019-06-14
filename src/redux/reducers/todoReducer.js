import { UPDATE_VALUE, SAVE_TODO } from "../actions/actionTypes.js";

const INITIAL_STATE = {
  value: "",
  todos: []
};

export default (state = INITIAL_STATE, action) => {
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
        todos: [todos.filter()]
      };

    case TOGGLE_COMPLETED:
      return {};
    // End of Swith
    default:
      return state;
  }
};
