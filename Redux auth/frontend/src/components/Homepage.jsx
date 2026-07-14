import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOutThunk } from "../redux/authSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {user ? (
          <>
            <h1 className="text-3xl font-extrabold mb-2">Welcome</h1>
            <h2 className="text-lg text-gray-600">{user.email}</h2>
            <p className="mt-6 text-sm text-gray-500">You are logged in.</p>
            <button
              onClick={() => dispatch(logOutThunk())}
              className="px-6 py-2.5 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Logout
            </button>{" "}
          </>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold mb-4">Welcome Guest</h1>

            <div className="flex gap-4 justify-center mt-4">
              <Link to="/login">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                  Sign Up
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
