import React, { useRef, useState } from "react";
import vid1 from "../../assets/vid1.mp4";
import vid2 from "../../assets/vid2.mp4";
import vid3 from "../../assets/vid3.mp4";
import vid4 from "../../assets/vid4.mp4";
import vid5 from "../../assets/vid5.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const WorkGallery = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [soundStates, setSoundStates] = useState(Array(videoRefs.length).fill(false));

  const videos = [
    { id: 1, vid: vid1, vidRef: videoRefs[0] },
    { id: 2, vid: vid2, vidRef: videoRefs[1] },
    { id: 3, vid: vid3, vidRef: videoRefs[2] },
    { id: 4, vid: vid4, vidRef: videoRefs[3] },
    { id: 5, vid: vid5, vidRef: videoRefs[4] },
  ];

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
        <div className="flex flex-wrap gap-8">
          {videos.map((video, index) => (
            <div key={video.id} className="flex flex-col">
              <video
                ref={video.vidRef}
                src={video.vid}
                autoPlay
                muted
                className="h-80 rounded-xl cursor-pointer"
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
