import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_URL } from "../constants";
import Comments from "./Comments";



const commentsData = [
    {
      name: "Author",
      comment: "This is a comment",
      replies: [
        {
          name: "Author",
          comment: "This is a comment",
          replies: [
            {
              name: "Author",
              comment: "This is a comment",
              replies: [],
            },
  
            {
              name: "Author",
              comment: "This is a comment",
              replies: [
                {
                  name: "Author",
                  comment: "This is a comment",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          name: "Author",
          comment: "This is a comment",
          replies: [
            {
              name: "Author",
              comment: "This is a comment",
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  

const WatchVideo = () => {
  
  const [params] = useSearchParams();

  const videoId = params.get("v");
  const [comments,setComments] = useState([]);

  useEffect(()=>{

  },[]);

  const getComments = async()=>{

    const res = await fetch(YOUTUBE_COMMENTS_URL + videoId);
    const data = await res.json();

    console.log(data.items)
    setComments(data.items)

  }


  return (
    <div className="grid mt-5">
      <div className="left">
        <div className="col-span-10 w-fit border">
          <iframe
            width="900"
            height="506"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl"
            
          ></iframe>
        </div>
        <div>
            <div className="text-2xl font-semibold my-5 mt-8">Comments</div>
          <Comments comments={commentsData}/>
        </div>
      </div>
      <div className="col-span-10"></div>
    </div>
  );
};

export default WatchVideo;
