import React from "react";

const VideoCard = ({ video }) => {
  const { channelTitle, thumbnails, title } = video.snippet;
  const thumbnail = thumbnails.medium.url;

  return (
    <div className="w-72 m-2 mt-4">
      <img alt="thumbnail" src={thumbnail} className="rounded-2xl w-72" />
      <div className="p-1 pl-3">
        <h1 className="font-semibold line-clamp-2">{title}</h1>
        <div className="text-sm text-gray-500">
          <div>{channelTitle}</div>
          <div>{video.statistics.viewCount} views</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
