import React from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

function SearchBar() {
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  
  return (
    <div>
      <form
        action=""
        className="flex items-center justify-center p-10"
        onSubmit={handleSubmit}
      >
        <input
          required
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search..."
          className="bg-gray-800 text-white p-2 rounded-md w-80"
        />
        <button
          type="submit"
          className="bg-green-600 cursor-pointer text-white p-2 rounded-md ml-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
