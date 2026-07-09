import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="min-h-[100vh] w-full text-white bg-gray-950">
     
      <SearchBar />

      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
