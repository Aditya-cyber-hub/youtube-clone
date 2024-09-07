import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API_URL, YOUTUBE_GET_VIDEO_URL } from "../constants";
import VideoCard from "./VideoCard";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  console.log(videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_API_URL);
    const data = await res.json();
    console.log(data);
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap ">
      {videos?.map((video) => (
        <Link to = {"/watch?v=" + video.id}>

        <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videos;
