import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../redux/features/authSlice";
import { toast } from "react-toastify";
const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await dispatch(registerThunk(formData));

    toast.success("Registration successful!");

    setFormData({
      name: "",
      email: "",
      password: "",
    });

  } catch (error) {
    toast.error(error.response?.data?.message || "Registration failed");
  }
};
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur"
      >
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/80">
            Welcome
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Sign up to start managing your employee directory.
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={formData.name}
            name="name"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
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
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        {error ? (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        ) : null}
      </form>
    </div>
  );
};

export default Signup;
