import "./VideoPlayer.scss";

import React from "react";

type VideoPlayerProps = {
  player: React.RefObject<HTMLVideoElement>
  isStopped: boolean
  playVideo: () => void
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({player, isStopped, playVideo}) => {

  return (
    <>
      <video
        ref={player}
        className="promo__video"
        src="../../assets/videos/promo.mp4"
        loop
      />
      {isStopped ? <button onClick={playVideo} className="video__playBtn" /> : null}
    </>
  );
};

export default VideoPlayer;
