import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VideoCard from "../common/video-card";
import Loader from "../common/loader";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.getVideos();
  }

  getVideos = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?q=${this.props.match
          .params.country +
          " tourism"}&maxResults=24&part=snippet&key=${GOOGLE_API_KEY}`
      )
      .then(response => {
        this.setState({
          videos: response.data.items
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  };
  render() {
    const { videos, isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }
    return (
      <div className="container settings-page">
        <div className="page-header">
          <Link to="/">&larr;</Link>
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
                link={`/details/${this.props.match.params.country}/${
                  video.id.videoId
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
