class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  componentDidMount() {
    this.props.searchYouTube({query: '', key: YOUTUBE_API_KEY, max: 5}, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videos
      })
    })
  }

  handleOnClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleInputChange(e) {
    this.props.searchYouTube({query: e.target.value, key: YOUTUBE_API_KEY, max: 5}, (videos) => {
      this.setState({
        currentVideo: videos[0],
        videos
      });
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
              <Search debounce={this.debounce} handleInputChange={this.handleInputChange.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <VideoList handleOnClick={this.handleOnClick.bind(this)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
