import React, { useState } from "react";
import ai from "../assets/ai.png";
import e1 from "../assets/e1.png";
import e2 from "../assets/e2.png";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import e6 from "../assets/e6.png";
import e7 from "../assets/e7.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l5 from "../assets/l5.png";
import l6 from "../assets/l6.png";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";

const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div id="home">
      <div className=" w-full object-cover ">
        <div className=" absolute  left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-100 bg-opacity-5 filter blur-2xl " />
        <div className="p-12">
          <h1 className=" font-bold  text-white">GPT-3 </h1>

          <div className="flex justify-center items-center mt-[-1.5%] text-white">
            <div>
              <AiOutlineMenu
                onClick={handleNav}
                className="absolute top-4 right-4 z-[99] md:hidden"
              />
              {nav ? (
                <div className="fixed w-full h-screen  bg-[#030621] flex flex-col justify-center items-center left-0 right-0 top-0 z-20">
                  <a
                    onClick={handleNav}
                    href="#main"
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <span className="pl-4">Home</span>
                  </a>
                  <a
                    onClick={handleNav}
                    href="#open"
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <span className="pl-4">What is GPT?</span>
                  </a>
                  <a
                    onClick={handleNav}
                    href="#case"
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <span className="pl-4"> Open AI</span>
                  </a>
                  <a
                    onClick={handleNav}
                    href="#lib"
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <button>Case Studies</button>
                    <span className="pl-4">Case Studies</span>
                  </a>
                  <a
                    onClick={handleNav}
                    href="#news"
                    className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030621] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                  >
                    <span className="pl-4">Library</span>
                  </a>
                </div>
              ) : (
                ""
              )}

              <div className="md:block hidden z-10">
                <div className="flex flex-col">
                  <ul className="flex  gap-4">
                    <li>
                      {" "}
                      <a href="#main"> Home</a>
                    </li>
                    <li>
                      <a href="#open">What is GPT?</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#case">Open AI</a>
                    </li>
                    <li>
                      <a href="#news">Case Studies </a>
                    </li>
                    <a href="#lib">Library</a>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end mt-[-1.75%] mr-12 text-white">
            <button>Sing In</button>
            <button className="font-bold max-w-[130px] max-h-[25px] text-white bg-[#FF6914] w-full  rounded-lg">
              Sing Up
            </button>
          </div>
        </div>

        <div className="grid  sm:grid-cols-1 md:grid-cols-2">
          <div>
            <div className="bg-gradient-to-r from-purple-800 to-orange-400 text-transparent bg-clip-text mt-28 ml-12 ">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl">
                Let's Build Something Amazing with GPT-3 OpenAI
              </h1>
            </div>

            <p className="font-montserrat font-normal text-sm md:text-base text-white leading-5 tracking-wider ml-12 pt-8 w-">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <div className="flex ml-12 h-12 mt-8">
              <input
                className="bg-blue-900 bg-opacity-83  w-[370px] pl-9"
                type="email"
                placeholder="Your Email Address"
              />
              <button className="text-white font-bold  justify-end  bg-[#FF6914]  rounded-sm">
                Get Started
              </button>
            </div>
            <div className="flex mt-24 ml-12 space-x-[-15px]">
              <div className="relative w-14 h-14">
                <img
                  src={e1}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="relative w-14 h-14">
                <img
                  src={e2}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="relative w-14 h-14">
                <img
                  src={e3}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="relative w-14 h-14">
                <img
                  src={e4}
                  The
                  possibilites
                  are
                  beyond
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="relative w-14 h-14">
                <img
                  src={e5}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="relative w-14 h-14">
                <img
                  src={e6}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <div className="relative w-14 h-14">
                <img
                  src={e7}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
              <p className="font-montserrat font-normal t text-white text-xs m-auto pl-5">
                1,600 people requested access to visit in laasat 24 hourse
              </p>
            </div>
          </div>
          <div>
            <img src={ai} alt="/" />
          </div>
        </div>

        <div className="flex  gap-9 justify-center pt-20 pb-11 ">
          <div className="grid  gap-9 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <img src={l1} alt="" />
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l5} alt="" />
            <img src={l6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
