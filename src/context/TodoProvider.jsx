import { useReducer } from "react";
import { TodoContext } from "./todoContext";

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: Date.now(),
                title: action.payload,
                completed: false,
            },];
        case "TOGGLE_TODO":
            return state.map((todo) => 
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            );
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
}

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
