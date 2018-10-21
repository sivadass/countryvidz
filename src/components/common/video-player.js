import React from "react";
import Loader from "./loader";

const VideoPlayer = ({ videoID }) => {
  console.log(`https://www.youtube.com/embed/${videoID}`);
  return (
    <div className="video-player-container">
      <iframe
        className="video-player"
        src={`https://www.youtube.com/embed/${videoID}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      >
        <Loader />
      </iframe>
    </div>
  );
};

export default VideoPlayer;
