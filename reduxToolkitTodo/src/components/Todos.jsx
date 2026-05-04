import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        Your Tasks
      </h2>

      <ul className="space-y-2 max-h-96 overflow-y-auto pr-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-400 py-8">
            No todos yet. Add one to get started!
          </li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 border border-blue-200 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 ease-in-out group"
            >
              <span className="text-gray-800 font-medium">{todo.title}</span>

              <button
                onClick={() => dispatch(removeTodo({ id: todo.id }))}
                className="bg-red-500/80 hover:bg-red-600 px-3 py-1 rounded-md text-sm font-semibold transition-all duration-300 ease-in-out transform group-hover:scale-110 active:scale-95 shadow-lg text-white"
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Todos;
