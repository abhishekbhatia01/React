import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex gap-3 mt-8 mb-10">
      <input
        type="text"
        className="flex-1 bg-gray-100 rounded-lg border border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-3 px-4 leading-8 transition-all duration-300 ease-in-out placeholder-gray-400"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-gradient-to-r from-cyan-600 to-blue-600 border-0 py-3 px-8 focus:outline-none hover:from-cyan-700 hover:to-blue-700 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-300/50"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
