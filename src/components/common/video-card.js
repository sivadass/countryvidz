import React from "react";
import Loader from "./loader";

const VideoCard = ({
  title,
  description,
  thumbURL,
  channelID,
  channelTitle
}) => {
  return (
    <div className="video-card-container">
      <div className="video-card-thumbnail">
        <img src={thumbURL} />
      </div>
      <div className="video-card-meta">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
