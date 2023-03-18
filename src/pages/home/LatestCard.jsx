import { HeroCardData } from "../../data/Data.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiRightArrow className="text-3xl text-black absolute left-2" />
    </div>
  );
};

const PreviousArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BiLeftArrow className="text-3xl text-black  absolute left-1" />
    </div>
  );
};

const LatestCard = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 839,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="pt-24 container">
      <Slider
        prevArrow={<PreviousArrow />}
        nextArrow={<NextArrow />}
        {...settings}
        className="pl-8 sm:pl-0"
      >
        {HeroCardData.map((item) => {
          return (
            <div key={item.id}>
              <div className="h-80 lg:h-[23.5rem] w-60 md:w-64 lg:w-72 border-2 border-black rounded-lg flex flex-col gap-y-8 p-2">
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="mx-auto w-[17.5rem] h-60 lg:h-72"
                  />
                </div>
                <div className="flex justify-around items-center">
                  <h1 className="text-sm md:text-base font-bold md:font-extrabold">
                    {item.title}
                  </h1>
                  <p className="text-xs">{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default LatestCard;

/* <SwiperSlide>
            <div className="h-[23.5] w-72 border-2 border-black rounded-lg flex flex-col gap-y-14 p-10">
              <div className="flex flex-col gap-y-4">
                <h1 className="text-4xl font-extrabold">NEW & IMPROVED</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="flex flex-col gap-y-4">
                <button className="bg-black text-[#96CED8] px-3 py-1 text-sm rounded-lg">
                  GETTING STARTED GUIDE
                </button>
                <div>
                  <button className="text-black rounded-lg border border-black text-xs px-3 py-1 flex">
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide> */
