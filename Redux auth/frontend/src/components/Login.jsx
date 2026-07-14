import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("1");

  try {
    console.log("2");

    const response = await dispatch(loginThunk(formData));

    console.log("3", response);

    toast.success("Login Successful!");

    navigate("/");
  } catch (error) {
    console.log("ERROR", error);

    toast.error(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 border rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 cursor-pointer text-white p-2 rounded disabled:bg-gray-400"
        >
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
