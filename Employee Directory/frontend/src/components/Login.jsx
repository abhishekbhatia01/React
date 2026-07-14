import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [FormData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginThunk(FormData));
      console.log("Login successful");
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-12 bg-slate-900/60 p-6 rounded-lg shadow-lg backdrop-blur"
    >
      <h2 className="text-2xl font-semibold text-sky-100 mb-4 text-center">
        Sign in
      </h2>

      <div className="flex flex-col">
        <input
          type="email"
          value={FormData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 mb-3 rounded-md bg-slate-800 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          type="password"
          value={FormData.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 mb-3 rounded-md bg-slate-800 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Login;
