import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <>
          <li
            key={todo.id}
            className={`flex justify-between items-center p-3 border rounded ${
              todo.completed ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <span
              className={`flex-grow ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.title}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                className={`px-3 py-1 rounded ${
                  todo.completed
                    ? 'bg-yellow-500 hover:bg-yellow-600'
                    : 'bg-green-500 hover:bg-green-600'
                } text-white`}
              >
                {todo.completed ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
};

export default TodoList;
