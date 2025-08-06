import TodoProvider from "../context/TodoProvider";
import Auth from "./Auth";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <>
    <Auth/>
    <TodoProvider>
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TodoForm/>
          <TodoList/>
        </div>
      </div>
    </TodoProvider>
    </>
  );
};

export default TodoApp;