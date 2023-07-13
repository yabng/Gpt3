import React from "react";
import myr from "../assets/mar.png";
import mya from "../assets/mya.png";
import myi from "../assets/myi.png";
import mys from "../assets/mys.png";
import mym from "../assets/mym.png";

const Myapp = () => {
  return (
    <div
      className=" flex justify-center items-center mt-[30%] md:mt-[20%]"
      id="case"
    >
      <div className="w-[75%] h-[80%]">
        <div className="grid sm:grid-cols-1 md:grid-cols-[2fr,3fr] sm:pt-24 md:pt-0">
          <div className=" relative sm:top-36 md:top-0">
            <img className=" absolute top-[-25%] left-2" src={mys} alt="" />
            <img className="absolute top-[-10%] left-[15%]" src={mym} alt="" />
            <img className="absolute bottom-0" src={myr} alt="" />
            <img
              className="absolute right-[13%] md:right-[-15%]"
              src={mya}
              alt=""
            />
            <img className=" relative" src={myi} alt="" />
          </div>

          <div className=" m-auto pt-[30%] md:pt-0">
            <p className=" text-purple-900 font-bold font-sansmont">
              Request Ealy Access to Get stared
            </p>

            <div className="bg-gradient-to-r from-purple-800 to-orange-400 text-transparent bg-clip-text ">
              <h1 className="font-bold pt-9 text-2xl md:text-3xl lg:text-4xl pb-4">
                The possibilites are beyond <br />
                your imaginaton
              </h1>
            </div>

            <p className="text-white font-sansmont pt-9">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>

            <p className="text-[#FF6914] font-sansmont mt-9">
              Request Early Access to Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myapp;
