import React from "react";
import { useDispatch } from "react-redux";
import { addToCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollectionn = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="relative w-80 h-96 rounded-xl overflow-hidden shadow-xl group">
      {/* Image / Video */}
      {item.type === "photo" ? (
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      ) : (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
        <h2 className="text-white text-lg font-semibold w-[70%] line-clamp-2">
          {item.title}
        </h2>

        <button
          onClick={(e) => addToCollectionn(e, item)}
          className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 cursor-pointer rounded-lg text-white transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
