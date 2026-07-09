import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((store) => store.collection.items);
  const dispatch = useDispatch();

  if (collection.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-white">
        <h1 className="text-4xl font-bold">📁 My Collection</h1>
        <p className="mt-4 text-gray-400 text-lg">
          No saved photos or videos yet.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-8 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">📁 My Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {collection.map((item) => (
          <div
            key={item.id}
            className="relative h-96 rounded-xl overflow-hidden shadow-xl group"
          >
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

            {/* Remove Button */}
            <button
              onClick={() => {
                dispatch(removeFromCollection(item.id));
                dispatch(removeToast());
              }}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition"
            >
              Remove
            </button>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="text-white text-lg font-semibold line-clamp-2">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
