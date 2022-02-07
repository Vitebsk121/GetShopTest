import "./App.scss";

import React, {useRef, useState} from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Banner from "../../Components/Banner/Banner";
import PromoReg from "../../Components/PromoReg/PromoReg";

const App: React.FC = () => {

  const [cls, setCls] = useState(["promo__banner"]);
  const [isStopped, setIsStopped] = useState(true);
  const [promoIsVisible, setPromoIsVisible] = useState(true);
  const player = useRef<HTMLVideoElement>(null);

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
    setPromoIsVisible(false)
    setIsStopped(false);
    player.current!.play();
  }

  const stopVideo = () => {
    hideBanner();
    setIsStopped(true);
    setPromoIsVisible(true);
    player.current!.pause();
  }

  return (
    <div className="app__promo">
      <div className="promo__wrapper">
        <VideoPlayer player={player} isStopped={isStopped} playVideo={playVideo} />
        {isStopped
          ? null
          : <Banner cls={cls} stopVideo={stopVideo} />
        }
        { promoIsVisible
          ? <PromoReg playVideo={playVideo} />
          : null
        }
      </div>
    </div>
  );
};

export default App;
