import React from "react";

const Library = () => {
  return (
    <div className=" flex justify-center items-center md:mt-[10%]" id="lib">
      <div className="w-[85%] h-[80%] bg-[#050C4B]">
        <div className="w-12 h-1 bg-gradient-to-r from-purple-900 to-orange-500 mt-12 ml-12" />
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-5">
          <div className=" col-span-1 font-bold text-white ml-12 mt-2">
            What is GPT-3
          </div>
          <div className="col-span-4 text-white">
            <p className="pl-7 pr-6 pt-4 md:pt-0 lg:pt-0 text-justify font-sansmont">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>

        <div className=" felx flex- bg-gradient-to-r from-purple-800 to-orange-400 text-transparent bg-clip-text ml-12 mt-12 lg:mt-28 ">
          <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl pb-4 ">
            The possibilites are beyond <br />
            your imaginaton
          </h1>
        </div>
        <div className="grid  sm:col-span-1 md:grid-cols-3 lg:grid-cols-3 mb-12 ">
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-900 to-orange-500 mt-12 ml-12" />
            <h1 className="ml-12 mt-2 text-white font-bold">Chatbots</h1>
            <p className="text-white ml-12 mt-4 font-sansmont ">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.
            </p>
          </div>
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-900 to-orange-500 mt-12 ml-12" />
            <h1 className="ml-12 mt-2 text-white font-bold">Knowledgebase</h1>
            <p className="text-white ml-12 mt-4 font-sansmont ">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-purple-900 to-orange-500 mt-12 ml-12" />
            <h1 className="ml-12 mt-2 text-white font-bold">Education</h1>
            <p className="text-white ml-12 mt-4 font-sansmont ">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
