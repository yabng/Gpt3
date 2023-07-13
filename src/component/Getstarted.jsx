import React from "react";

const Getstarted = () => {
  return (
    <div className=" flex justify-center items-center md:mt-[10%] pb-40">
      <div className="w-[80%] md:h-32 bg-gradient-to-r from-purple-900 to-orange-500 mt-12 ml-12 rounded-xl">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col pt-11 pl-6">
            <p className="font-sansmont sm:text-lg md:text-xl">
              Request Early Access to Get Started
            </p>
            <p className="font-sansmont font-bold sm:text-lg md:xl">
              Register today & start exploring the endless possibilities.
            </p>
          </div>
          <div className=" pt-6 pr-8 ">
            <button className="bg-black rounded-2xl w-32 h-8 text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
