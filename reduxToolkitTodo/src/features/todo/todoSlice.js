import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const existTodo = state.todos.find((todo) => todo.id === id);

      if (existTodo) {
        existTodo.title = title;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
