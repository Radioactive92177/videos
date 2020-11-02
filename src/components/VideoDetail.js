import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment">
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <div className="ui active inverted dimmer">
          <div className="ui massive loader"></div>
        </div>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
        <h1> </h1>
      </div>
    );
  }
  return (
    <>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.id.videoId}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
