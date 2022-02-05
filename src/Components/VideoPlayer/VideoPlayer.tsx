import "./VideoPlayer.scss";

import React, {useRef} from "react";

const VideoPlayer: React.FC = () => {

  const player = useRef<HTMLVideoElement>(null)

  const playVideo = () => {
    player.current!.play();
  }

  const stopVideo = () => {
    player.current!.pause();
  }

  return (
    <video
      ref={player}
      className="promo__video"
      src="../../assets/videos/promo.mp4"
      loop
      // autoPlay
    />
  );
};

export default VideoPlayer;
