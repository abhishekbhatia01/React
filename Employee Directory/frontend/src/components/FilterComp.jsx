import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDepartment } from "../redux/features/employeeSlice";
import { useFetcher } from "react-router-dom";

const FilterComp = () => {
  const dispatch = useDispatch();

  const department = useSelector((state) => state.employee.department);

  const handleChange = (e) => {
    dispatch(setDepartment(e.target.value));
  };
  return (
    <div className="w-full">
      <label
        htmlFor="department-filter"
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        Filter by Department
      </label>
      <select
        id="department-filter"
        value={department}
        onChange={handleChange}
        className="w-full rounded-2xl border border-white/10 bg-slate-900/80 py-3 px-4 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>
    </div>
  );
};

export default FilterComp;
