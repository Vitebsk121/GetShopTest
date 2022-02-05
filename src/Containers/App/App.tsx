import "./App.scss";

import React from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

const App: React.FC = () => {

  return (
      <div className="app__promo">
        <VideoPlayer />

      </div>
  );
};

export default App;
