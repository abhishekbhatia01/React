import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../api/userApi";
import { setUsers } from "../redux/features/UserSlice";
import List from "./List";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  const loadUsers = async () => {
    try {
      const response = await getAllUsers();

      const data = response.users.map((item) => ({
        id: item._id,
        name: item.name,
        number: item.number,
      }));

      dispatch(setUsers(data));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Users List
          </h2>

          <p className="text-center text-gray-500 mt-2">
            Total Users:{" "}
            <span className="font-semibold text-blue-600">
              {users.length}
            </span>
          </p>
        </div>

        {/* Users */}
        {users.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <p className="text-xl text-gray-500">
              No users found.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {users.map((user) => (
              <List key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;