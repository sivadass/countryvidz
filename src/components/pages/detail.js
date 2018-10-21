import React from "react";
import axios from "axios";
import VideoCard from "../common/video-card";
import Loader from "../common/loader";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }
  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    axios
      .get(
        `https://content.googleapis.com/youtube/v3/search?q=${this.props.match
          .params.country +
          " tourism"}&maxResults=24&part=snippet&key=AIzaSyAno8NdQQ1dudqiRF5qQJMfIdD7byFa2io`
      )
      .then(response => {
        this.setState(
          {
            videos: response.data.items
          },
          () => {
            console.log(this.state.videos);
          }
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
  render() {
    const { videos } = this.state;
    if (videos.length === 0) {
      <Loader />;
    }
    return (
      <div className="container settings-page">
        <div className="page-header">
          {decodeURIComponent(this.props.match.params.country)} Country Videos
        </div>
        <div className="page-content">
          <div className="video-card-wrapper">
            {videos.map(video => (
              <VideoCard
                key={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                thumbURL={video.snippet.thumbnails.medium.url}
                channelID={video.snippet.channelId}
                channelTitle={video.snippet.channelTitle}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
