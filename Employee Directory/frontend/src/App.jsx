import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import EmployeeEdit from "./components/EmployeeEdit";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { refreshAccessTokenThunk } from "./redux/features/authSlice";
import ProtectedRoute from "../Protected Routes/ProtectedRoute";
import { setAuthCheck } from "./redux/features/authSlice";
const App = () => {
  const dispatch = useDispatch();
  const { isAuthCheck } = useSelector((state) => state.auth);

  useEffect(() => {
    const loggedOut = localStorage.getItem("loggedOut");

    if (loggedOut === "true") {
      dispatch(setAuthCheck(true));
    } else {
      dispatch(refreshAccessTokenThunk());
    }
  }, [dispatch]);

  if (!isAuthCheck) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-100 text-lg">Loading...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/empform" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
