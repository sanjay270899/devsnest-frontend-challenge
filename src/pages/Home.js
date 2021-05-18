import { useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";
import { VideoQueue } from "../components/VideoQueue";

export const Home = ({ videoQueue }) => {
  const [selectedVideo, setSelectedVideo] = useState(-1);
  return (
    <main className="d-flex-col m-5">
      <VideoPlayer
        url={
          selectedVideo === -1
            ? ""
            : `${videoQueue[selectedVideo].video_files[0].link}`
        }
        title={
          selectedVideo === -1
            ? "No Video Slected"
            : `${selectedVideo + 1}. ${videoQueue[selectedVideo].text}-${
                videoQueue[selectedVideo].id
              }`
        }
      />
      <VideoQueue videoQueue={videoQueue} setSelectedVideo={setSelectedVideo} />
    </main>
  );
};
