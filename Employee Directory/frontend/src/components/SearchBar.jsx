import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/features/employeeSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.employee.search);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-slate-300">
        Search employees
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="M13.5 13.5L17 17"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            <circle
              cx="8.5"
              cy="8.5"
              r="5.75"
              stroke="currentColor"
              strokeWidth="1.75"
            />
          </svg>
        </span>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search by name, email, department, or designation"
          className="w-full rounded-2xl border border-white/10 bg-slate-900/80 py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
        />
      </div>
    </div>
  );
};

export default SearchBar;
