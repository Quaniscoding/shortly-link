import React from "react";
import { useSelector } from "react-redux";

export default function RenderData() {
  const data = useSelector((state) => state.getLink.data);
  let timeout = null;
  if (timeout != null) {
    clearTimeout(timeout);
  }
  const copy = async () => {
    await navigator.clipboard.writeText(data?.result?.full_share_link);
    timeout = setTimeout(() => {
      document
        .getElementById("buttonCopy")
        .classList.remove("bg-[hsl(180,66%,49%)]");
      document
        .getElementById("buttonCopy")
        .classList.add("bg-[hsl(257,27%,26%)]");
      document.getElementById("buttonCopy").innerHTML = "Copied!";
    }, 1000);
  };
  let innerHTML = document.getElementById("buttonCopy")?.innerHTML;
  if (data != "" && innerHTML != "") {
    if (innerHTML == "Copied!") {
      document
        .getElementById("buttonCopy")
        .classList.add("bg-[hsl(180,66%,49%)]");
      document
        .getElementById("buttonCopy")
        .classList.remove("bg-[hsl(257,27%,26%)]");
      document.getElementById("buttonCopy").innerHTML = "Copy";
    }
    return (
      <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between p-4 mt-5 bg-white shadow-lg rounded-lg ">
        <div>
          <span className="font-bold text-lg md:pt-0 pt-3">
            {data.result.original_link}
          </span>
        </div>
        <div className="md:hidden block h-[0.01rem] w-full bg-[hsl(0,0%,75%)]"></div>
        <div className="md:w-auto w-full flex md:flex-row flex-col justify-between md:items-center items-start">
          <span className="text-[hsl(180,66%,49%)] pr-4 text-start md:pt-0 pt-3">
            {data.result.full_share_link}
          </span>
          <div className="w-full md:pt-0 pt-3">
            <button
              id="buttonCopy"
              onClick={copy}
              className="w-full md:pt-0 block rounded-lg bg-[hsl(180,66%,49%)] font-bold text-white text-center hover:bg-[hsl(180,79%,87%)] md:w-32 h-12"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    );
  }
}
