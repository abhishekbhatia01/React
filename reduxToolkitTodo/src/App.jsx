import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl p-8 bg-white rounded-3xl shadow-xl border border-blue-200/50">
        <h1 className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Redux Toolkit Todo
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm">
          Manage your tasks with style
        </p>

        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
