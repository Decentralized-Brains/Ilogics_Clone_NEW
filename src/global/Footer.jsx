import React from "react";
import Logo from "../assets/logo/dwope005d.png";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="container py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex text-white gap-10 flex-col sm:flex-row sm:justify-center pl-5 sm:pl-0">
            <div>
              <img src={Logo} alt="" className="w-[180px] h-[96px]" />
            </div>
            <div className="max-w-xs flex flex-col gap-10">
              <p>
                Hello, we are ABC. trying to make an effort to put the right
                people for you to get the best results. Just insight
              </p>

              <span>
                <h1>(123) 456-7890</h1>
                <h1>ABC@gmail.com</h1>
              </span>
              <div className="text-xl flex gap-4">
                <FaDiscord />
                <FaTwitter />
                <FaInstagram />
                <FaTelegram />
              </div>
            </div>
          </div>
          <div className="flex text-white gap-5 sm:gap-28 flex-row sm:justify-center pl-5 sm:pl-0">
            <div>
              <span className="text-[#D0DAF5]"> Product</span>
              <ul className="flex flex-col gap-1 pt-5 ">
                <li className="text-gray-400 hover:text-white duration-300">
                  Autocapture
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Data Governance
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Virtual Events
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Virtual Users
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Behavioral Analytics
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Connect
                </li>
              </ul>
            </div>
            <div>
              <span className="text-[#D0DAF5]"> Explore</span>
              <ul className="flex flex-col gap-1 pt-5 ">
                <li className="text-gray-400 hover:text-white duration-300">
                  Resources
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Blog
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Documents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
