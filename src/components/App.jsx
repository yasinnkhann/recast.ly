import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from '../lib/searchYouTube.js';
import exData from '../data/exampleVideoData.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exData[0],
      searchQuery: ''
    }
    // BINDERS
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await searchYouTube('', (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
      console.log(data);
    })
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      await searchYouTube(this.state.searchQuery, (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
      console.log(data);
    })
    }
  }

  handleChange(query) {
    this.setState({ searchQuery: query });
  }

  handleTitleClick(video) {
    this.setState({ currentVideo: video })
  }


  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.handleChange} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              titleClick={this.handleTitleClick}
            />
          </div>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

