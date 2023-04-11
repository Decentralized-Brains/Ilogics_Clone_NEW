
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import Invootoory from "../assets/icons/DreamStore.png";
import Home from "../assets/icons/DreamWave.png";
import Economy from "../assets/icons/Economy.jpg";
import Staking from "../assets/icons/SteakStation.png";

import { ERC725 } from '@erc725/erc725.js';
import erc725schema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import Web3 from 'web3';

const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';
const web3 = new Web3(window.ethereum);
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';



async function fetchProfileData(address) {

  const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT)
    try {
      const profile = new ERC725(erc725schema, address, provider, { ipfsGateway: IPFS_GATEWAY});
      return await profile.fetchData("LSP3Profile");
    } catch (error) {
      return console.log('This is not an ERC725 Contract');
    }
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState({});
  const [shadow, setShadow] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [walletAddress, setWalletAddress] = useState()
  
  const links = [
    {
      id: 1,
      link: "steakstation",
      img: Staking,
    },
    {
      id: 2,
      link: "pills",
      img: Invootoory,
    },
    {
      id: 3,
      link: "dreamstate",
      img: Economy,
    },
  ];

  const connectWallet= async() => {
    const [wallet] = await web3.eth.requestAccounts();
   
    const user = await fetchProfileData(wallet)
    setUser({
      name: user?.value?.LSP3Profile?.name,
      image: user?.value?.LSP3Profile?.profileImage[0]?.url.replace("ipfs://", IPFS_GATEWAY)
    })
    
    setWalletAddress(wallet)
    setIsConnected(false)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-[70px] duration-300 z-[100] shadow-lg backdrop-blur-xl text-white"
            : "fixed w-full h-[70px] duration-300 z-[100] "
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-between items-center h-[70px] container mx-auto px-2 md:px-0">
          <div className="flex items-center">
            <NavLink to="/">
              <img src={Home} alt="" className="w-24 h-24" />
            </NavLink>
          </div>
          <ul className="hidden md:flex justify-around items-center gap-x-12">
            {links.map(({ id, link, img }) => (
              <nav
                key={id}
                className="cursor-pointer capitalize hover:scale-105 duration-200 font-bold"
              >
                <NavLink to={link} duration={500}>
                  <img src={img} alt="" className="w-14 h-14" />
                </NavLink>
              </nav>
            ))}
            {isConnected?
            <button onClick={()=>connectWallet()} className="py-[13px] px-5 lg:px-[43px] animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] text-white rounded-lg">
              Connect Wallet
            </button>:
              (
                <>
                <button className="py-[13px] px-5 lg:px-[43px] animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] text-white rounded-lg">
                  {user.name}
                </button> 
                <img src={user.image} className="w-14 rounded-full" /> 
                <button className="py-[13px] px-5 lg:px-[43px] animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] text-white rounded-lg">
                  {walletAddress && `${walletAddress.slice(0,6)}...${walletAddress.slice(walletAddress.length-4,walletAddress.length)}`}
                </button> 
                </>
              )
            }
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%] text-black ease-in duration-500 backdrop-blur-lg z-40 flex md:hidden"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul className="mt-20">
          {links.map(({ id, link, img }) => (
            <nav
              key={id}
              className="mx-4 my-4 cursor-pointer capitalize text-white"
            >
              <NavLink onClick={() => setNav(!nav)} to={link} duration={500}>
                <img src={img} alt="" className="w-14 h-14" />
              </NavLink>
            </nav>
          ))}
          <span className="mx-4 my-8 flex items-center gap-[17px] text-xl md:hidden text-white">
            <FaDiscord />
            <FaTwitter />
            <FaInstagram />
            <FaTelegram />
          </span>
          <button className=" mx-4  py-[10px] px-[30px] animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] text-white rounded-lg">
            Connect Wallet
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
