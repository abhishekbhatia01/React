import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { user, isAuthCheck } = useSelector((state) => state.auth);

  if (!isAuthCheck) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-100 text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
