import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateEmployees } from "../redux/features/employeeSlice";
import { toast } from "react-toastify";
import {
  getEmployeeById,
  updateEmployee as updateEmployeeApi,
} from "../api/employeeApi";
import { useEffect } from "react";
const EmployeeEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
  });
  const [loading, setLoading] = React.useState(false);

  const fetchEmployee = async () => {
    try {
      const response = await getEmployeeById(id);

      console.log("Fetched employee data:", response);
      setFormData({
        name: response.employee.name,
        email: response.employee.email,
        department: response.employee.department,
        designation: response.employee.designation,
        salary: response.employee.salary,
      });
    } catch (error) {
      toast.error("Failed to fetch employee data");
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await updateEmployeeApi(id, formData);

      dispatch(updateEmployees(response.employee));
      toast.success("Employee updated successfully");

      navigate("/employees");
    } catch (error) {
      toast.error("Failed to update employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur"
      >
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Employee Management
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Edit employee details
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Update the employee record and save the changes back to the roster.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            style={{ colorScheme: "dark" }}
          >
            <option value="" className="bg-slate-900 text-white">
              Select Department
            </option>
            <option value="IT" className="bg-slate-900 text-white">
              IT
            </option>
            <option value="HR" className="bg-slate-900 text-white">
              HR
            </option>
            <option value="Finance" className="bg-slate-900 text-white">
              Finance
            </option>
            <option value="Marketing" className="bg-slate-900 text-white">
              Marketing
            </option>
            <option value="Sales" className="bg-slate-900 text-white">
              Sales
            </option>
          </select>

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 sm:col-span-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            loading
              ? "cursor-not-allowed bg-gray-500 text-white focus:ring-gray-500 focus:ring-offset-gray-100"
              : "bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus:ring-cyan-300 focus:ring-offset-slate-950"
          }`}
        >
          {loading ? "Updating..." : "Update Employee"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
