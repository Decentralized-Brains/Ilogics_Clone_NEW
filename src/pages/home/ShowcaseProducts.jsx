import React from "react";
import { ShowCaseProductsData } from "../../data/Data";

const ShowcaseProducts = () => {
  return (
    <div>
      <div className="container my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-20">
          {ShowCaseProductsData.map((item) => {
            return (
              <div
                key={item.id}
                className=" w-72 h-48 bg-[#EAE7E7] bg-opacity-30 rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-56 h-40 rounded-lg transform -translate-y-12 mx-auto object-cover"
                />
                <div className="flex flex-col items-center transform -translate-y-8">
                  <h1 className="text-xl font-bold text-[#011D54]">
                    {item.title}
                  </h1>
                  <span className="text-[#011D54]">{item.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseProducts;
