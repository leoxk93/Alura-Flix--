// import React, { useContext } from 'react';
import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

const VideoList = () => {
  const { videos } = useContext(VideoContext);

  return (
    <div>
      {videos.map((video, index) => (
        <video key={index} controls>
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideoList;
