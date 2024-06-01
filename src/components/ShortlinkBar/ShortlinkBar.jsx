import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetLink, clearError } from "../../redux/getLink";
import bgDesktop from "../../assets/images/bg-shorten-desktop.svg";
import bgMobile from "../../assets/images/bg-shorten-mobile.svg";
import RenderData from "../renderData/renderData";
import debounce from "lodash.debounce";

export default function ShortlinkBar() {
  const [valueUrl, setValueUrl] = useState("");
  const data = useSelector((state) => state.getLink.data);
  const error = useSelector((state) => state.getLink.error);
  const dispatch = useDispatch();

  const search = debounce((value) => {
    if (!value) {
      showErrorMessage("Please add a link");
    } else if (data.some((item) => item.combineUrl === value)) {
      showErrorMessage("You have already entered this link");
    } else {
      clearErrorMessage();
      dispatch(callGetLink(value));
    }
  }, 1000);

  const showErrorMessage = (message) => {
    const errorMessage = document.getElementById("errorMesagge");
    errorMessage.innerText = message;
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("block");
    document.getElementById("inputValue").classList.add(
      "placeholder:text-red-400",
      "border-red-500",
      "border-2"
    );
  };

  const clearErrorMessage = () => {
    const errorMessage = document.getElementById("errorMesagge");
    errorMessage.classList.remove("block");
    errorMessage.classList.add("hidden");
    document.getElementById("inputValue").classList.remove(
      "placeholder:text-red-400",
      "border-red-500",
      "border-2"
    );
    dispatch(clearError());
  };

  const handleInputChange = (e) => {
    setValueUrl(e.target.value);
    clearErrorMessage();
  };

  const handleButtonClick = () => {
    search(valueUrl);
  };

  return (
    <div id="linkBar" className="relative">
      <div className="max-w-screen-xl w-full h-auto flex flex-wrap items-center justify-between mx-auto p-4 relative top-[75px] ">
        <form
          className={`rounded bg-[hsl(257,27%,26%)] w-full h-full p-10 flex md:flex-row items-center flex-col bg-no-repeat bg-cover justify-between bg-[url(${bgMobile})] md:bg-[url(${bgDesktop})]`}
          onSubmit={(e) => { e.preventDefault(); handleButtonClick(); }}
        >
          <div className="w-full">
            <input
              id="inputValue"
              value={valueUrl}
              onChange={handleInputChange}
              className="w-full rounded-lg pl-4 h-12 placeholder:text-[hsl(0,0%,75%)] placeholder:font-medium placeholder:text-xl"
              placeholder="Shorten a link here..."
            />
            <p
              id="errorMesagge"
              className="mt-2 text-sm text-red-600 dark:text-red-500 hidden"
            >
              <span className="font-medium">Please add a link</span>
            </p>
            {error && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{error}</span>
              </p>
            )}
          </div>
          <div className="md:w-[50px]"></div>
          <button
            type="button"
            onClick={handleButtonClick}
            className="md:mt-0 mt-5 w-full block rounded-lg bg-[hsl(180,66%,49%)] font-bold text-white px-3 py-2 text-center hover:bg-[hsl(180,79%,87%)] md:w-36 h-12"
          >
            Shorten It!
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col items-center justify-between md:mx-auto p-4 bg-[#f0f1f6] pt-16">
        <div className="max-w-screen-xl w-full flex flex-col items-center justify-between mx-auto md:p-4">
          <RenderData />
        </div>
      </div>
    </div>
  );
}
