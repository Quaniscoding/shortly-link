import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RenderData() {
  const data = useSelector((state) => state.getLink.data);
  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    const button = document.getElementById(`buttonCopy-${text}`);
    if (button) {
      button.classList.remove("bg-[hsl(180,66%,49%)]");
      button.classList.add("bg-[hsl(257,27%,26%)]");
      button.innerHTML = "Copied!";
      setTimeout(() => {
        button.classList.add("bg-[hsl(180,66%,49%)]");
        button.classList.remove("bg-[hsl(257,27%,26%)]");
        button.innerHTML = "Copy";
      }, 2000);
    }
  };

  return (
    data.length > 0 &&
    data.map((item, index) => (
      <div
        key={index}
        className="max-w-screen-xl w-full flex flex-wrap items-center justify-between p-4 mt-5 bg-white shadow-lg rounded-lg"
      >
        <div>
          <span className="font-bold text-lg md:pt-0 pt-3">
            {item.result_url}
          </span>
        </div>
        <div className="md:hidden block h-[0.01rem] w-full bg-[hsl(0,0%,75%)]"></div>
        <div className="md:w-auto w-full flex md:flex-row flex-col justify-between md:items-center items-start">
          <span className="text-[hsl(180,66%,49%)] pr-4 text-start md:pt-0 pt-3">
            {item.combineUrl}
          </span>
          <div className="w-full md:pt-0 pt-3 flex justify-end">
            <button
              id={`buttonCopy-${item.result_url}`}
              onClick={() => copy(item.result_url)}
              className="w-full md:pt-0 block rounded-lg bg-[hsl(180,66%,49%)] font-bold text-white text-center hover:bg-[hsl(180,79%,87%)] md:w-32 h-12"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    ))
  );
}
