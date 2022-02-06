import "./App.scss";

import React, {useRef, useState} from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Banner from "../../Components/Banner/Banner";

const App: React.FC = () => {

  const [cls, setCls] = useState(["promo__banner"]);
  const [isStopped, setIsStopped] = useState(true)
  const player = useRef<HTMLVideoElement>(null)

  const showBanner = () => {
    setTimeout(() => {
      setCls([...cls, "visible"]);
    }, 5000)
  }

  const hideBanner = () => {
    setCls(["promo__banner"]);
  }

  const playVideo = () => {
    showBanner();
    setIsStopped(false);
    player.current!.play();
  }

  const stopVideo = () => {
    hideBanner();
    player.current!.pause();
  }

  return (
    <div className="app__promo">
      <div className="promo__wrapper">
        <VideoPlayer player={player} isStopped={isStopped} playVideo={playVideo}/>
        <Banner cls={cls} stopVideo={stopVideo} />
      </div>
    </div>
  );
};

export default App;
