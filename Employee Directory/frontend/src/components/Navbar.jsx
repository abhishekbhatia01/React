import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-transparent backdrop-blur-sm border-b border-white/10">
        <h2 className="font-semibold text-2xl text-white">StaffSync</h2>
        <div className="flex gap-4 mt-2">
          <Link
            to="/"
            className="text-sm bg-sky-400 text-slate-900 font-medium px-4 py-2 rounded-full hover:bg-sky-500 transition-shadow duration-150 hover:shadow-md"
          >
            Add Employee
          </Link>
          <Link
            to="/employees"
            className="text-sm bg-sky-400 text-slate-900 font-medium px-4 py-2 rounded-full hover:bg-sky-500 transition-shadow duration-150 hover:shadow-md"
          >
            List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
