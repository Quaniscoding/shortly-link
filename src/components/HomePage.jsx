import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetLink } from "../redux/getLink";
export default function HomePage() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.getLink.data);
  if (data != "") {
    console.log(data);
  }
  let timeout = null;
  if (timeout != null) {
    clearTimeout(timeout);
  }
  useEffect(() => {
    timeout = setTimeout(() => {
      dispatch(callGetLink("www.facebook.com"));
    }, 1000);
  }, []);
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex flex-col">
        <span>More than just shorter links</span>
        <span>Build your's brand's reconition and get detailed</span>
        <span>insight on how your links are performing.</span>
        <button className="hidden md:block rounded-full bg-[hsl(180,66%,49%)] font-bold text-white px-5 py-1.5 text-center hover:bg-[hsl(180,79%,87%)]">
          Get Started
        </button>
      </div>
      <div>
        <img
          src="../assets/images/illustration-working.svg"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
