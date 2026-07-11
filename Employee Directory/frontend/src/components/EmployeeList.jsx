import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../redux/features/employeeSlice";
import { getEmployees } from "../api/employeeApi";
import { toast } from "react-toastify";
import ListComp from "./ListComp";
import SearchBar from "./SearchBar";
import FilterComp from "./FilterComp";
import { useNavigate } from "react-router-dom";
const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { employees, search, department } = useSelector(
    (state) => state.employee,
  );

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      dispatch(setEmployees(response.employees));
    } catch (error) {
      toast.apply(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const query = search.toLowerCase();

    const matchSearch =
      employee.name?.toLowerCase().includes(query) ||
      employee.email?.toLowerCase().includes(query) ||
      employee.department?.toLowerCase().includes(query) ||
      employee.designation?.toLowerCase().includes(query);

    const matchDepartment =
      department === "All" || employee.department === department;

    return matchSearch && matchDepartment;
  });

  return (
    <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/20 backdrop-blur">
        <div className="border-b border-white/10 px-6 py-5 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Employee Directory
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Team Members
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SearchBar />
            <FilterComp />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-left">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Email
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Department
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Designation
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Salary
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td
                    className="px-6 py-10 text-center text-slate-400"
                    colSpan="6"
                  >
                    No Employees Found
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((employee) => (
                  <ListComp
                    key={employee._id || employee.id}
                    employee={employee}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
