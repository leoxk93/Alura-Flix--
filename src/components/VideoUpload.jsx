// import React, { useState, useContext } from 'react';
import { useState, useContext } from "react";
import { VideoContext } from "../contexts/VideoContext";

const VideoUpload = () => {
  const { addVideo } = useContext(VideoContext);
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoFile) {
      const videoUrl = URL.createObjectURL(videoFile);
      addVideo({ url: videoUrl, name: videoFile.name });
      setVideoFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button type="submit">Upload Video</button>
    </form>
  );
};

export default VideoUpload;
