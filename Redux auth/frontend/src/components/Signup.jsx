import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../redux/authSlice";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerThunk(formData));
    toast.success("Registration successful! Please log in.");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">{loading ? "Signing Up" : "Sign Up"}</button>
      </form>
    </div>
  );
};

export default Signup;
