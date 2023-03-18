import React from "react";
import EconomyCard from "./EconomyCard";
import EconomyLaderBoard from "./EconomyLaderBoard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BG from "../../assets/backgrounds/Pearl_Texture_2(Loop).webm";

const Economy = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mainpage">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src={BG}
          type="video/webm"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="container mt-24 z-10">
        <EconomyCard />
        <EconomyLaderBoard />
      </div>
    </div>
  );
};

export default Economy;
