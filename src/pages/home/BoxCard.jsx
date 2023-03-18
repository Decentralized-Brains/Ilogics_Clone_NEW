import React, { useState } from "react";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { BoxCardData } from "../../data/Data";

const BoxCard = () => {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <div className=" my-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
          {BoxCardData.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[305px] h-[413px] backdrop-blur-sm bg-white/10 rounded-lg p-2 flex flex-col gap-y-4 group realtive"
              >
                <div className="w-[289px] h-[256px] overflow-hidden rounded-lg mx-auto">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[289px] h-[256px] object-cover rounded-lg hover:scale-110 duration-500"
                  />
                </div>
                <span
                  className="group-hover:-translate-y-8 group-hover:z-100 duration-500 text-xs
                  absolute transform translate-x-5 -z-10 px-4 rounded-lg py-2 animate-text bg-gradient-to-r from-[#D9D1AE] via-[#96CED8] to-[#CAACC8]"
                >
                  Expiverse (DTC) (9 Spots)
                </span>
                <div className="flex justify-between">
                  <div className="text-[#ADD2DD] text-xl flex gap-2">
                    <FaTwitter />
                    <FaTelegram />
                  </div>
                  <div className="text-white">{item.price}</div>
                </div>
                <div>
                  <div className="flex justify-between items-center text-white text-sm">
                    <div>Max Purchase: {item.purchase}</div>
                    <div>{item.stockleft} left</div>
                  </div>
                  <div className="py-2 flex justify-between">
                    <button className="rounded-lg py-[2px] px-[45px] animate-text bg-gradient-to-r from-[#BDC0D1] via-[#9DCCD6] to-[#B9C3CA] text-[15px]">
                      Purchase
                    </button>
                    <div className="flex gap-1">
                      <button className="rounded-sm  py-[2px] px-[10px] animate-text bg-gradient-to-r from-[#BDC0D1] via-[#9DCCD6] to-[#B9C3CA]">
                        {count}
                      </button>
                      <div className="flex flex-col gap-1">
                        <button
                          onClick={increment}
                          className="rounded-sm px-[6px] animate-text bg-gradient-to-r from-[#BDC0D1] via-[#9DCCD6] to-[#B9C3CA]"
                        >
                          +
                        </button>
                        <button
                          onClick={decrement}
                          className="rounded-sm px-[6px] animate-text bg-gradient-to-r from-[#BDC0D1] via-[#9DCCD6] to-[#B9C3CA]"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-16 flex justify-center">
          <button className="text-white border-2 border-white py-[16px] px-[54px] rounded-lg hover:bg-white hover:text-[#1E242B] duration-500 font-medium">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxCard;
