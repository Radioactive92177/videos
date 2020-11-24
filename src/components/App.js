import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]); //* To store Videos
  const [selectedVideo, setSelectedVideo] = useState(null); //* To store the selected video

  //? For fetching videos from youtube
  const onTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: "AIzaSyAYbmBCCEV_8IE3tX_1RheZKPqc5Nzuhkw",
      },
    });

    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  };

  //? For videos at initial render
  useEffect(() => {
    onTermSubmit();
  }, []);

  //? For showing the selecting video
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
