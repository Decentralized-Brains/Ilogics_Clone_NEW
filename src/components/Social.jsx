import React from "react";
import { SocialData } from "../data/Data.jsx";

const Social = ({ vartically }) => {
  return (
    <>
      {vartically ? (
        <ul className="z-[100] w-[50px] bg-gray-100/30 hover:bg-violet-100/30 flex flex-col items-center gap-4 py-4 rounded-full">
          {SocialData.map((val) => (
            <li key={val.id} className="">
              <a
                href={val.url}
                className="text-white text-2xl cursor-pointer hover:text-violet-400 duration-300"
                target="_blank"
                rel="noreferrer"
              >
                {val.icon}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="z-[100] w-fit bg-gray-100/30 hover:bg-violet-100/30 flex items-center gap-4 py-3 px-5 rounded-full">
          {SocialData.map((val) => (
            <li key={val.id} className="">
              <a
                href={val.url}
                className="text-white text-2xl cursor-pointer hover:text-violet-400 duration-300"
                target="_blank"
                rel="noreferrer"
              >
                {val.icon}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Social;
