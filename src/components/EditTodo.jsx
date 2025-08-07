import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/slices/todoSlices";

const EditTodo = ({ todo, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedTitle.trim()) {
      dispatch(editTask({
        id: todo.id,
        updatedTask: { title: editedTitle }
      }));
      onCancel();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-grow">
      <div className="flex space-x-2">
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          className="flex-grow border border-gray-300 p-2 rounded"
          autoFocus
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTodo;