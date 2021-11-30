import VideoListEntry from './VideoListEntry.js';

export default function VideoList(props) {
  const mappedVideos = props.videos.map(video => (
    <VideoListEntry
      key={video.id.videoId}
      video={video}
      titleClick={props.titleClick}
    />
  ));
  return (
    <div className="video-list">
      {mappedVideos}
    </div>
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
