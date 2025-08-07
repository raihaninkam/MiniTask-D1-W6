import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        id: Date.now(), // Using timestamp as ID if not provided
        completed: false,
        ...action.payload,
      });
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.todos.findIndex(task => task.id === id);
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...updatedTask };
      }
    },
    toggleTask: (state, action) => {
      const task = state.todos.find(todo => todo.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter(task => task.id !== action.payload);
    },
    // Added clearCompleted for convenience
    clearCompleted: (state) => {
      state.todos = state.todos.filter(task => !task.completed);
    },
  },
});

// Export all actions
export const { addTask, editTask, toggleTask, removeTask, clearCompleted } = todoSlice.actions;

// Selector functions
export const selectAllTodos = (state) => state.todo.todos;
export const selectActiveTodos = (state) => state.todos.todos.filter(todo => !todo.completed);
export const selectCompletedTodos = (state) => state.todos.todos.filter(todo => todo.completed);

export default todoSlice.reducer;