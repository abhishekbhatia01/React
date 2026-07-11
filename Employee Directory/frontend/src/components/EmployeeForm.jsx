import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addEmployee, setLoading } from "../redux/features/employeeSlice";
import { createEmployee } from "../api/employeeApi";
const EmployeeForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
  });
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.department ||
      !formData.designation ||
      !formData.salary
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      await delay(1500);
      const response = await createEmployee(formData);
      dispatch(addEmployee(response.employee));
      toast.success("Employee added successfully");
      setFormData({
        name: "",
        email: "",
        department: "",
        designation: "",
        salary: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
      <form
        action=""
        className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur"
        onSubmit={handleSubmit}
      >
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Employee Management
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Add a new employee
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Capture the key employee details in a clean, dark workspace.
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
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition scheme-dark focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
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
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            loading
              ? "bg-gray-500 text-white cursor-not-allowed focus:ring-gray-500 focus:ring-offset-gray-100"
              : "bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus:ring-cyan-300 focus:ring-offset-slate-950"
          }`}
        >
          {loading ? "Adding..." : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
