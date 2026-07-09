import React from "react";
import { useDispatch } from "react-redux";
import { setName, clearForm, setNumber } from "../redux/features/UserSlice";
import { useSelector } from "react-redux";
import {saveUser} from "../api/userApi";

const UserForm = () => {
    const dispatch = useDispatch();

    const {name, number} = useSelector((state)=> state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !number){
            alert("Please fill in all fields");
            return;
        }

        try{
            const data = await saveUser({
                name,
                number
            });
            console.log("User saved successfully:", data);
            
            dispatch(clearForm());
        }
        catch(error){
            console.error("Error saving user:", error);
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          User Form
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter your details below
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter your number"
              value={number}
              onChange={(e) => dispatch(setNumber(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Save User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;