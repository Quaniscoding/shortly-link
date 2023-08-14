import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { callGetLink } from "../../redux/getLink";
// import ".././css/main.css";
import bgDesktop from "../../assets/images/bg-shorten-desktop.svg";
import bgMobile from "../../assets/images/bg-shorten-mobile.svg";
import RenderData from "../renderData/renderData";
export default function ShortlinkBar() {
  const [valueGmail, setValueGmail] = useState([]);
  const dispatch = useDispatch();
  let timeout = null;
  if (timeout != null) {
    clearTimeout(timeout);
  }
  const search = (value) => {
    if (value == "") {
      document.getElementById("errorMesagge").classList.remove("hidden");
      document.getElementById("errorMesagge").classList.add("block");
      document
        .getElementById("errorMesagge")
        .classList.remove("placeholder:text-[hsl(0,0%,75%)]");
      document
        .getElementById("inputValue")
        .classList.add(
          "placeholder:text-red-400",
          "border-red-500",
          "border-2"
        );
    } else {
      document.getElementById("errorMesagge").classList.remove("block");
      document
        .getElementById("inputValue")
        .classList.remove(
          "placeholder:text-red-400",
          "border-red-500",
          "border-2"
        );
      document
        .getElementById("errorMesagge")
        .classList.add("hidden", "placeholder:text-[hsl(0,0%,75%)]");
      document
        .getElementById("inputValue")
        .classList.remove("placeholder:text-red-400");
      timeout = setTimeout(() => {
        dispatch(callGetLink(value));
      }, 1000);
    }
  };
  return (
    <div id="linkBar" className="relative">
      <div className="max-w-screen-xl w-full h-auto flex flex-wrap items-center justify-between mx-auto p-4 relative top-[75px] ">
        <form
          className={`rounded bg-[hsl(257,27%,26%)] w-full h-full p-10 flex md:flex-row items-center flex-col bg-no-repeat bg-cover justify-between bg-[url(${bgMobile})] md:bg-[url(${bgDesktop})]`}
        >
          <div className="w-full">
            <input
              id="inputValue"
              onChange={(e) => setValueGmail(e.target.value)}
              className="w-full rounded-lg pl-4 h-12 placeholder:text-[hsl(0,0%,75%)] placeholder:font-medium placeholder:text-xl"
              placeholder="Shorten a link here..."
            />
            <p
              id="errorMesagge"
              className="mt-2 text-sm text-red-600 dark:text-red-500 hidden"
            >
              <span className="font-medium">Please add a link</span>
            </p>
          </div>
          <div className="md:w-[50px]"></div>
          <button
            type="button"
            onClick={() => search(valueGmail)}
            className="md:mt-0 mt-5 w-full block rounded-lg bg-[hsl(180,66%,49%)] font-bold text-white px-3 py-2 text-center hover:bg-[hsl(180,79%,87%)] md:w-36 h-12"
          >
            Shorten It!
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col items-center justify-between md:mx-auto p-4 bg-[#f0f1f6] pt-16">
        <div className="max-w-screen-xl w-full flex flex-col items-center justify-between mx-auto md:p-4">
          {RenderData()}
        </div>
      </div>
    </div>
  );
}
