import React from "react";

import Marquee from "react-fast-marquee";
import RoundLogo from "../../assets/logo/DWOPEw.png";

const MarqueeText = () => {
  return (
    <div className="relative mt-24 bg-black py-4 bg-opacity-10 ">
      <Marquee gradient={false} speed={100}>
        <div className="flex justify-evenly gap-10 w-full">
          <div className="text-[2rem] font-extrabold text-[#5C636F] ">
            UNDER CONSTRUCTION
          </div>
          <div className="text-[2rem] font-extrabold text-[#F8DF75] ">
            DREAMSTORE WEEK NO #1
          </div>
          <div className="text-[2rem] font-extrabold text-[#5C636F] ">
            UNDER CONSTRUCTION
          </div>
          <div className="text-[2rem] font-extrabold text-[#F8DF75]">
            DREAMSTORE WEEK NO #1
          </div>
        </div>
      </Marquee>
      <div className="absolute -top-24  left-[47%]">
        <img src={RoundLogo} alt="" className="h-[150px] w-[180px] " />
      </div>
    </div>
  );
};

export default MarqueeText;
