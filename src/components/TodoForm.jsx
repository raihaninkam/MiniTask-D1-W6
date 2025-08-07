// import { useContext, useState } from "react";
// import { TodoContext } from "../context/todoContext";

// const TodoForm = () => {
//   const [inputValue, setInputValue] = useState('');
//   const { dispatch } = useContext(TodoContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       dispatch({ type: "ADD_TODO", payload: inputValue });
//       setInputValue('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-6">
//       <div className="flex space-x-2">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Add a new todo"
//           className="flex-grow border border-gray-300 p-2 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Add
//         </button>
//       </div>
//     </form>
//   );
// };

// export default TodoForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/todoSlices";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTask({ title: inputValue }));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;