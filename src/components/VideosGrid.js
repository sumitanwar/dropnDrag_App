import React from "react";
import "./ImageGrid.css";
// Rendering individual videos
const Videos = ({ videos }) => {
  return (
    <div className="file-item">
      <video width={"320"} height="200" className="file-videos" controls>
        <source src={videos.src} type="video/mp4" />
      </video>
      {/* <img alt={`img - ${videos.id}`} src={videos.src} className="file-img" /> */}
    </div>
  );
};
// Videos List Component//
const VideosGride = ({ videos }) => {
  // render each video by calling video component
  const renderVideo = (video, index) => {
    return <Videos video={video} key={`${video.id}-video`} />;
  };
  // Return the list of files//
  return <section className="file-list">{videos.map(renderVideo)}</section>;
};
export default VideosGride;
