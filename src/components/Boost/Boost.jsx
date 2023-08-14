import React from "react";
import "../css/main.css";
import bgDesktop from "../../assets/images/bg-boost-desktop.svg";
import bgMobile from "../../assets/images/bg-boost-mobile.svg";
export default function Boost() {
  return (
    <div>
      <div className="w-full h-14 bg-[#f0f1f6] md:hidden block"></div>
      <div
        className={`w-full bg-[hsl(257,27%,26%)] bg-no-repeat bg-cover bg-[url(${bgMobile})] md:bg-[url(${bgDesktop})]`}
      >
        <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-between pt-10 pb-10">
          <span className="text-3xl text-white font-black pb-5">
            Boost your links today
          </span>
          <button className="block rounded-full bg-[hsl(180,66%,49%)] font-bold text-white px-7 py-2 text-center hover:bg-[hsl(180,79%,87%)]">
            <a href="#linkBar">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
}
