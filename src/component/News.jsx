import React from "react";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";
import rec3 from "../assets/rec3.png";
import rec4 from "../assets/rec4.png";
import rec5 from "../assets/rec5.png";
const News = () => {
  return (
    <div className=" flex justify-center items-center" id="news">
      <div className="w-[85%] h-[80%]">
        <div className="bg-gradient-to-r from-purple-800 to-orange-400 text-transparent bg-clip-text ">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
            A lot is happening,
            <br /> We are blogging about it.
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-[2fr,3fr] pt-20 gap-5">
          <div >
            <img className=" w-full" src={rec1} alt="" />
            <div className="bg-[#160D65] text-white">
              <p>Mar 12,2022</p>

              <h1 className=" font-sansmont sm:text-xl md:text-4xl pt-12">
                GPT-3 and Open AI is the future.Let us exlore how it is?
              </h1>

              <p className=" pb-[-120px]">Read full Atricl</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <img className=" w-full" src={rec2} alt="" />
              <div className="bg-[#160D65] text-white h-full">
              <p>Mar 12,2022</p>

              <h1 className=" font-sansmont sm:text-xl md:text-4xl pt-12">
                GPT-3 and Open AI is the future.Let us exlore how it is?
              </h1>

              <p>Read full Atricl</p>
            </div>
            </div>
            <div>
              <img className=" w-full" src={rec3} alt="" />
              <div className="bg-[#160D65] text-white">
              <p>Mar 12,2022</p>

              <h1 className=" font-sansmont sm:text-xl md:text-4xl pt-12">
                GPT-3 and Open AI is the future.Let us exlore how it is?
              </h1>

              <p>Read full Atricl</p>
            </div>
            </div>
            <div>
              <img className=" w-full" src={rec4} alt="" />
              <div className="bg-[#160D65] text-white">
              <p>Mar 12,2022</p>

              <h1 className=" font-sansmont sm:text-xl md:text-4xl pt-12">
                GPT-3 and Open AI is the future.Let us exlore how it is?
              </h1>

              <p>Read full Atricl</p>
            </div>
            </div>
            <div>
              <img className=" w-full" src={rec5} alt="" />
              <div className="bg-[#160D65] text-white">
              <p>Mar 12,2022</p>

              <h1 className=" font-sansmont sm:text-xl md:text-4xl pt-12">
                GPT-3 and Open AI is the future.Let us exlore how it is?
              </h1>

              <p className="">Read full Atricl</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
