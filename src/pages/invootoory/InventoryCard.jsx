import React from "react";
import { HeroCardData } from "../../data/Data";

const InventoryCard = () => {
  return (
    <div>
      <h1 className="text-4xl text-black">Your Pills</h1>

      {/* card */}

      <div className="my-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
          {HeroCardData.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-[297px] h-[377px] border border-gray-400 rounded-lg p-2 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                <div className="w-[279px] h-[287px] mx-auto rounded-lg">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[279px] h-[287px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex justify-between items-center pt-[25px]">
                  <span className="text-lg font-bold md:font-extrabold text-black">
                    LOREM#3478
                  </span>
                  <span className="text-sm font-medium text-black">
                    0.357 E
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
