import React from "react";
import LatestCard from "./LatestCard";
import Marquee from "./MarqueeText";
import ShowcaseProducts from "./ShowcaseProducts";
import BoxNavbar from "./BoxNavbar";
import Social from "../../components/Social";
import BG1 from "../../assets/backgrounds/Pearl_Texture_2(Loop).webm";

const Home = () => {
  return (
    <>
      <div className="mainpage">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={BG1}
            type="video/webm"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <LatestCard />
        <Marquee />
        <ShowcaseProducts />
      </div>
      <div className="mainpage">
        <BoxNavbar />
      </div>
      <div className="hidden lg:block fixed -right-12 top-[45%] -rotate-90">
        <Social />
      </div>
    </>
  );
};

export default Home;
