import React from "react";
import Loader from "./loader";
import { Link } from "react-router-dom";

const VideoCard = ({ title, thumbURL, link }) => {
  return (
    <div className="video-card-container">
      <Link to={link} className="wrapper">
        <div className="video-card-thumbnail">
          <img src={thumbURL} />
        </div>
        <div className="video-card-meta">
          <h4>{title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
