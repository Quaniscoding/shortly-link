import React from "react";
import "../css/main.css";
import brand from "../../assets/images/icon-brand-recognition.svg";
import detailed from "../../assets/images/icon-detailed-records.svg";
import fully from "../../assets/images/icon-fully-customizable.svg";
export default function Advanced() {
  return (
    <div className="w-full h-[100%] bg-[#f0f1f6]">
      <div
        id="advanced"
        className="max-w-screen-xl flex flex-col items-center justify-center mx-auto "
      >
        <div className="flex flex-col item-center justify-center">
          <span className="text-center text-[hsl(257,27%,26%)] font-black text-3xl md:text-5xl">
            Advanced Statistics
          </span>
          <span className="text-center font-medium md:font-bold text-[hsl(0,0%,75%)] text-2xl md:w-[37rem]">
            Track how your links are performing across the web with our advanced
            statistcs dashboards.
          </span>
        </div>
      </div>
      <div className="max-w-screen-xl flex md:flex-row flex-col md:mt-0 mt-[50px]justify-between mx-auto relative md:top-[-100px] top-[50px] md:bottom-0 bottom-[50px]">
        <div className="flex items-center max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="brand bg-white rounded-lg pt-5 pl-6 pr-6 pb-0 md:w-96 w-[350px] m-3">
              <div className="relative md:left-0 left-[110px] bottom-[55px] bg-[hsl(260,8%,14%)] p-3 m-4 rounded-[50%] w-[50px] h-[50px]">
                <img src={brand} alt="" />
              </div>
              <div className="flex flex-col relative top-[-45px] pl-2 ">
                <span className="text-3xl font-extrabold text-[hsl(260,8%,14%)] md:text-start text-center">
                  Brand Recogition
                </span>
                <span className="text-xl font-bold text-[hsl(0,0%,75%)] pt-4 md:text-start text-center">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:mt-[10%] max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="bg-white rounded-lg pt-5 pl-5 pr-5 pb-0 md:w-96 w-[350px] m-3">
              <div className="relative md:left-0 left-[110px] bottom-[55px] bg-[hsl(260,8%,14%)] p-3 m-4 rounded-[50%] w-[50px] h-[50px]">
                <img src={detailed} alt="" />
              </div>
              <div className="flex flex-col relative top-[-45px] pl-4">
                <span className="text-3xl  font-extrabold text-[hsl(260,8%,14%)] md:text-start text-center">
                  Detailed Records
                </span>
                <span className="text-xl font-bold text-[hsl(0,0%,75%)] pt-4 md:text-start text-center">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:mt-[20%] max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="bg-white rounded-lg pt-5 pl-5 pr-5 pb-0 md:w-96 w-[350px] m-3">
              <div className="relative md:left-0 left-[110px] bottom-[55px] bg-[hsl(260,8%,14%)] p-3 m-4 rounded-[50%] w-[50px] h-[50px]">
                <img src={fully} alt="" />
              </div>
              <div className="flex justify-center flex-col relative top-[-45px] pl-4">
                <span className="text-3xl font-extrabold text-[hsl(260,8%,14%)] md:text-start text-center">
                  Fully Customizable
                </span>
                <span className="text-xl font-bold text-[hsl(0,0%,75%)] pt-4 md:text-start text-center">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
