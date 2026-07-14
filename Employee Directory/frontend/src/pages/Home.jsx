import React from "react";
import { logOutThunk } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 border border-slate-700 shadow-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sky-100 leading-tight">
            Employee Directory
          </h1>
          <p className="text-slate-300 text-lg">
            Quickly find, add, and manage your team's information. Search,
            update, and keep records in one secure place.
          </p>

          {user ? (
            <>
              <p className="text-sky-100">
                Signed in as <span className="font-medium">{user.name}</span>
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Link
                  to="/add"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md"
                >
                  + Add Employee
                </Link>
                <Link
                  to="/employees"
                  className="inline-flex items-center px-4 py-2 border border-slate-700 text-slate-100 rounded-md hover:bg-slate-800"
                >
                  View Directory
                </Link>
                <button
                  onClick={() => dispatch(logOutThunk())}
                  className="ml-auto px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full"
                >
                  Log out
                </button>
              </div>
            </>
          ) : (
            <div className="flex gap-3 mt-6">
              <Link
                to="/login"
                className="px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="px-5 py-3 border border-slate-700 text-slate-100 rounded-lg hover:bg-slate-800"
              >
                Sign up
              </Link>
            </div>
          )}

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-400">
            <li>• Search employees by name or role</li>
            <li>• Secure authentication & role support</li>
            <li>• Fast inline edits and updates</li>
            <li>• Export and reporting tools</li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm p-6 card">
            <svg
              viewBox="0 0 64 64"
              className="w-full h-40 mx-auto text-sky-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="10"
                width="60"
                height="36"
                rx="4"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.12"
              />
              <circle
                cx="20"
                cy="28"
                r="6"
                fill="currentColor"
                opacity="0.16"
              />
              <rect
                x="32"
                y="22"
                width="18"
                height="4"
                rx="2"
                fill="currentColor"
                opacity="0.14"
              />
              <rect
                x="32"
                y="30"
                width="18"
                height="4"
                rx="2"
                fill="currentColor"
                opacity="0.14"
              />
              <rect
                x="6"
                y="44"
                width="52"
                height="2"
                fill="currentColor"
                opacity="0.08"
              />
            </svg>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-sky-100">
                Quick Overview
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                No fuss UI to manage your staff — optimized for speed and
                clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
