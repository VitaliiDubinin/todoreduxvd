import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      // console.log(state);
      // console.log(action.payload.itemtext);
      state.todos.push({
        id: new Date().toISOString(),
        item: action.payload.itemtext,
        completed: false,
        // addTodo: (state, action) => {
        //   state.push(action.payload);
        //   return state;
      });
    },

    removeTodo(state, action) {
      // console.log(state);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoComplete(state, action) {
      // console.log(state);
      // console.log(action.payload);
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload);
      toggledTodo.completed = !toggledTodo.completed;
    },

    updateTodo: (state, action) => {
      // console.log(state);
      // console.log(action.payload.id);
      // return state.map((todo) => {
      // return action.payload.map((todo) => {
      // console.log(todo);
      // if (todo.id === action.payload.id) {
      //   return {
      //     ...todo,
      //     item: action.payload.item,
      //   };
      // }
      // return todo;
      const updateTodo = state.todos.find((todo) => todo.id === action.payload.id);
      updateTodo.item = action.payload.item;
      // const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);
      // toggledTodo.completed = !toggledTodo.completed;

      // });
    },
  },
});

export const { updateTodo, addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;
export const text = (state) => state.todos.itemtext;
export default todoSlice.reducer;
