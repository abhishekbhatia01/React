import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { refreshThunk } from "./redux/authSlice";

import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Protected from "./components/Protected";

function App() {
  const dispatch = useDispatch();

  const { isAuthChecked } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (!isAuthChecked) {
    return <h1>Loading...</h1>;
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Protected />
          </ProtectedRoutes>
        }
      ></Route>
    </Routes>
  );
}

export default App;
