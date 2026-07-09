import React from "react";

const List = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border mt-10 border-gray-200 p-5 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-500 mt-1">
            📞 {user.number}
          </p>
        </div>

        <div className="flex gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Edit
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;