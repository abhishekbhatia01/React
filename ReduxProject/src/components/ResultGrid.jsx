import React from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if(!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());

        let data = [];

        if (activeTab === "photo") {
          let response = await fetchPhotos(query);

          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab === "video") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if(error){
    return <div className="text-red-500 text-center mt-10">{error}</div>
  }
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10 overflow-auto px-10 h-[80%]">
        {results.map((item, idx)=>{
            return <div key={idx} className="flex justify-center">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <ResultCard item={item}/>
                </a>
            </div>
        })}
    </div>
  )
};

export default ResultGrid;
