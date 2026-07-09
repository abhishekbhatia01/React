import React from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import {ToastContainer, toast} from "react-toastify"

const App = () => {
  return (
    <div className="min-h-[100vh] w-full text-white bg-gray-950">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/collection' element={<CollectionPage />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
