import React from "react";

import img from "../../assets/images/illustration-working.svg";
import ShortlinkBar from "../ShortlinkBar/ShortlinkBar";
import Advanced from "../Advanced/Advanced";
import Boost from "../Boost/Boost";
export default function HomePage() {
  return (
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex flex-col relative md:top-0 top-[300px]">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-5xl md:text-6xl font-black">
              More than just{" "}
            </span>
            <span className="text-5xl md:text-6xl font-black">
              shorter links
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[hsl(0,0%,75%)] font-medium text-lg ">
              Build your's brand's reconition and get detailed
            </span>
            <span className="text-[hsl(0,0%,75%)] font-medium text-lg">
              insight on how your links are performing.
            </span>
          </div>
          <div className="pt-6 md:w-[270px] w-full">
            <button
              id="error"
              className=" md:w-50 w-full block rounded-full bg-[hsl(180,66%,49%)] font-bold text-white px-7 py-2 text-center hover:bg-[hsl(180,79%,87%)]"
            >
              <a href="#linkBar">Get Started</a>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={img}
            alt=""
            className=" relative md:w-[600px] md:h-[400px] md:left-[30%] w-[400px] md:bottom-0 md:right-0 bottom-[230px] left-[110px]"
          />
        </div>
      </div>
      <ShortlinkBar />
      <Advanced />
      {/* <div className="h-10 w-3 bg-red-600"></div> */}
      <Boost />
    </div>
  );
}
