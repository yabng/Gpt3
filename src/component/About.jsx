import React from "react";

const About = () => {
  return (
    <div className=" flex justify-center items-center pt-12">
      <div className=" bg-[#050C4B]">
        <div className="bg-gradient-to-r from-purple-800 to-orange-400 text-transparent bg-clip-text mt-28 ml-12 ">
          <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-6xl pl-[15%] pr-[15%]">
            Do you want to step in to the future before others
          </h1>
        </div>
        <div className="flex justify-center">
          <button className="text-white border-white rounded border-2 w-48 h-16 mt-[10%] items-center">
            Request Early Access
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-[1fr,3fr] pt-12">
          <div className=" m-auto text-white">
            <h1 className="text-5xl font-bold font-sansmont">GPT-3</h1>
            <p className=" font-sansmont pt-5">Crechterwoord K12 182 DK</p>
            <p className=" font-sansmont">Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="grid grid-cols-3 text-white font-sansmont pt-16 pl-4">
            <div>
              <h1 className="font-bold">Links</h1>
              <ul className="pt-5">
                <li className="pt-5">Overons</li>
                <li className="pt-5">socail Media</li>
                <li className="pt-5">counters</li>
                <li className="pt-5">contact</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">Company</h1>
              <ul className="pt-5">
                <li className="pt-5">Tearms and Condiion</li>
                <li className="pt-5">Privacy and Plicy</li>
                <li className="pt-5">Contact</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold">Get in Touch</h1>
              <ul className="pt-5">
                <li className="pt-5">
                  Crechterwoord K12 <br /> 182 DK Alknjkcb
                </li>
                <li className="pt-5">058-132567</li>
                <li className="pt-5">info@payme.net</li>
              </ul>
            </div>
          </div>
        </div>

        <p className=" font-sansmont text-center text-white pt-[12%]">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;
