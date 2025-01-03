import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
    },

    // Toggle the completion status of a todo
    toggleTodo: (state, action) => {
      const todo = state.find((element) => element.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Mutate directly
      }
    },

    // Delete a todo
    deleteTodo: (state, action) => {
      return state.filter((element) => element.id !== action.payload); // Return a filtered array
    },

    // action = {id, e.target.value}
    updateTodo: (state, action) => {
      const todo = state.find((element) => element.id === action.payload.id);
      state.map((element) => {
        if (element.id === action.payload.id)
          element.title = action.payload.title;
      });
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
