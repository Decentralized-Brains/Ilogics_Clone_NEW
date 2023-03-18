import React from "react";
import { StockingTopBoxData } from "../data/Data.jsx";

const StackingTopBox = () => {
  return (
    <div className="max-w-4xl grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3  place-items-center my-[50px] mx-auto">
      {StockingTopBoxData.map((item) => {
        return (
          <div
            key={item.id}
            className="z-10 w-[295px] h-[106px] shadow-lg border border-gray-400 rounded-lg px-6 py-3 overflow-hidden"
          >
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-2">
                <img src={item.img} alt="" className="w-10 h-10 object-cover" />
                <span className="text-2xl font-extrabold pl-2">
                  {item.number}
                </span>
              </div>
              {/* checking if data avaliable */}

              {item.wrap && (
                <button className="text-sm animate-text bg-gradient-to-r from-[#B70EA6] to-[#0879EB] py-1.5 px-4 rounded-lg text-white">
                  {item.wrap}
                </button>
              )}
              {item.claim && (
                <button className="text-sm animate-text bg-gradient-to-r from-[#B70EA6] to-[#0879EB] py-1.5 px-4 rounded-lg text-white">
                  {item.claim}
                </button>
              )}
            </div>
            <h1 className="text-gray-600 text-xs pt-2">
              Lorem ipsum dolor sit amet
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default StackingTopBox;
