import React, {useState, useEffect } from "react";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const WorkGallery = () => {
  const [videos, setVideos] = useState([]);
  const [videoRefs, setVideoRefs] = useState([]);
  const [soundStates, setSoundStates] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await Axios.get(
          `https://api.cloudfixmedia.com/api/works`
        );
        const videoData = response.data;

        // Create refs for each video
        const videoRefsArray = videoData.map(() => React.createRef());
        const initialSoundStates = videoData.map(() => false);

        // Set state with fetched video data, refs, and initial sound states
        setVideos(videoData);
        setVideoRefs(videoRefsArray);
        setSoundStates(initialSoundStates);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (index) => {
    const video = videoRefs[index].current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleButtonClick = (index) => {
    const video = videoRefs[index].current;
    video.muted = !video.muted;
    const newSoundStates = [...soundStates];
    newSoundStates[index] = !video.muted;
    setSoundStates(newSoundStates);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((video, index) => (
            <div key={video.id} className="flex flex-col">
              <video
                ref={videoRefs[index]}
                src={video.video} // Assuming the API returns a 'video' field for the video source
                autoPlay
                muted
                className="h-64 md:h-auto rounded-xl cursor-pointer"
                onClick={() => handleVideoClick(index)}
              />
              <FontAwesomeIcon
                icon={soundStates[index] ? faVolumeHigh : faVolumeXmark}
                onClick={() => handleButtonClick(index)}
                className="text-black mt-2 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkGallery;
