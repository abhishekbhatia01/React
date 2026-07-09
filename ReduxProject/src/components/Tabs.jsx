import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photo", "video", "gif"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex justify-center gap-4 mt-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${activeTab == tab ? "bg-blue-700" : "bg-gray-600"}  cursor-pointer active:scale-95 px-5 py-2 rounded uppercase transition-all duration-200`}
          onClick={() => dispatch(setActiveTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
