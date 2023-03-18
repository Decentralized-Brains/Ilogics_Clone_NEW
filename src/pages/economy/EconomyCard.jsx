import React from "react";
import { EconomyTopBoxData } from "../../data/Data.jsx";

const EconomyCard = () => {
  return (
    <div className="z-10">
      <h1 className="text-4xl text-black z-10">DreamState</h1>
      <h1 className="text-2xl text-gray-600 py-5 z-50">Stats</h1>
      <h1 className="text-2xl text-gray-600 text-center z-[100]">
        SWITCH NETWORK TO GOERLI
      </h1>

      <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-[20px]">
        {EconomyTopBoxData.map((item) => {
          return (
            <div
              key={item.id}
              className="backdrop-blur-sm bg-white/30 z-10 w-[295px] h-[106px] shadow-lg rounded-lg px-6 py-3 overflow-hidden"
            >
              <div className="flex items-center  justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 h-10 object-cover"
                  />
                  <span className="text-2xl text-gray-600 font-extrabold pl-2">
                    {item.number}
                  </span>
                </div>
              </div>
              <h1 className="text-gray-500 text-xs pt-2">TOTAL ITEMS ADDED</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EconomyCard;
