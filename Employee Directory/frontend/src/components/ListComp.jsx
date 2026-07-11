import React from "react";
import { deleteEmployee } from "../api/employeeApi";
import { useDispatch } from "react-redux";
import { deleteEmployees } from "../redux/features/employeeSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ListComp = ({ employee }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?"
    );

    if(!confirmDelete) return;

    try {
      await deleteEmployee(employee._id);
      dispatch(deleteEmployees(employee._id));
      toast.success("Employee deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }
  return (
    <tr className="border-b border-white/10 transition-colors hover:bg-white/5">
      <td className="px-6 py-4 text-sm font-semibold text-white">
        {employee.name}
      </td>
      <td className="px-6 py-4 text-sm text-slate-300">{employee.email}</td>
      <td className="px-6 py-4 text-sm text-slate-300">
        {employee.department}
      </td>
      <td className="px-6 py-4 text-sm text-slate-300">
        {employee.designation}
      </td>
      <td className="px-6 py-4 text-sm font-semibold text-cyan-300">
        ₹{employee.salary}
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          <button className="rounded-lg bg-cyan-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 cursor-pointer" onClick={()=> navigate(`/employees/${employee._id}/edit`)}>
            Edit
          </button>
          <button className="rounded-lg bg-rose-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-rose-400 cursor-pointer" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ListComp;
