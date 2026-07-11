import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import EmployeeEdit from "./components/EmployeeEdit";

const App = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <Navbar />  
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/search" element={<SearchBar  />} />
        <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
      </Routes>
    </div>
  );
};

export default App;
