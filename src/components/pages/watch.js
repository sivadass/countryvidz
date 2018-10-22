import React from "react";
import axios from "axios";
import VideoPlayer from "../common/video-player";
import { Link } from "react-router-dom";
import moment from "moment";
import Loader from "../common/loader";

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDetails: {},
      isLoading: false
    };
  }

  componentDidMount() {
    this.getVideoDetails();
  }

  getVideoDetails = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?id=${
          this.props.match.params.videoID
        }&key=${GOOGLE_API_KEY}&part=snippet,contentDetails`
      )
      .then(response => {
        this.setState({
          videoDetails: response.data.items[0].snippet
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(() => {
        this.setState({
          isLoading: false
        });
      });
  };

  render() {
    const { title, description, publishedAt } = this.state.videoDetails;
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <div className="container watch">
        <div className="page-header">
          <Link to="/">&larr;</Link>
          <Link to={`/details/${this.props.match.params.country}`}>
            {decodeURIComponent(this.props.match.params.country)} >
          </Link>
          {this.props.match.params.videoID}
        </div>
        <div className="page-content">
          <VideoPlayer videoID={this.props.match.params.videoID} />
          <div className="video-details">
            <h2 className="video-title">{title}</h2>
            <p className="video-timestamp">
              {moment(publishedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <p className="video-description">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Watch;
