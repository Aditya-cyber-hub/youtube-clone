import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import { hideMenu } from "../redux/menuSlice";

const SearchResults = () => {
  const [params] = useSearchParams();
  const query = params.get("search_query");
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideMenu());
  }, []);

  useEffect(() => {
    getResults();
  }, [query]);

  const getResults = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API_URL + query);
    const result = await res.json();
    console.log(result);
    setVideos(result.items);
  };

  return (
    <div>
      {videos?.map((video) => (
        <Link to = {"/watch?v=" + video.id.videoId}>
        <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

const VideoCard = ({ video }) => {
  const { thumbnails, title, channelTitle, description } = video.snippet;
  const isVideo = video.id.kind === "youtube#video";
  const thumbnail = thumbnails.medium.url;

  console.log(video);

  return (
    <div className="flex mr-10 m-3 my-5">
      <img alt="video" src={thumbnail} className="rounded-xl" />
      <div className="flex flex-col px-4 gap-3">
        <h1>{title}</h1>
        <div className="text-sm text-gray-500 my-1">{channelTitle}</div>
        <div className="text-xs text-gray-600"> {description}</div>
      </div>
    </div>
  );
};

export default SearchResults;
