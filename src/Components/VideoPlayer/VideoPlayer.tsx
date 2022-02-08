import "./VideoPlayer.scss";
import promoVideo from "../../assets/videos/promo.mp4"

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
        src={promoVideo}
        loop
      />
      {isStopped ? <button tabIndex={-1} onClick={playVideo} className="video__playBtn" /> : null}
    </>
  );
};

export default VideoPlayer;
