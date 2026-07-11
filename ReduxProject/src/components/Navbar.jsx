import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-blue-900  ">
          <h2 className="font-semibold text-2xl">Media Search</h2>
        <div className="flex gap-4 mt-2">
          <Link
            to="/"
            className="text-xl bg-indigo-50 text-black font-medium px-4 py-2 text-xs"
          >
            Search
          </Link>
          <Link
            to="/collection"
            className="text-xl bg-indigo-50 text-black font-medium px-4 py-2 text-xs"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
