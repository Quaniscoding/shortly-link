import React from "react";

export default function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 w-full relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="HomePage" className="flex items-center">
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
            Shortly
          </span>
        </a>
        <div className="flex md:order-2">
          <button className="hidden md:block rounded-full font-bold px-5 py-1.5 text-center">
            Login
          </button>
          <div className="w-3"></div>
          <button className="hidden md:block rounded-full bg-[hsl(180,66%,49%)] font-bold text-white px-5 py-1.5 text-center hover:bg-[hsl(180,79%,87%)]">
            Sign up
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden md:block md:w-0 w-full md:order-1 md:pr-[50%] p-4 "
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[hsl(257,27%,26%)]  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="md:p-0 pt-5 pb-5">
              <a
                href="#"
                className="hover:text-black text-[18px] text-white md:text-[hsl(0,0%,75%)] font-bold dark:text-white"
                aria-current="page"
              >
                Features
              </a>
            </li>
            <li className="md:p-0 pb-5">
              <a
                href="#"
                className="hover:text-black text-[18px] font-bold dark:text-white text-white md:text-[hsl(0,0%,75%)]"
              >
                Pricing
              </a>
            </li>
            <li className="md:p-0 pb-5">
              <a
                href="#"
                className="hover:text-black text-[18px] font-bold dark:text-white text-white md:text-[hsl(0,0%,75%)]"
              >
                Resources
              </a>
            </li>
            <div className="md:hidden block h-[0.01rem] w-full bg-white"></div>
            <li className="pb-5">
              <button className="md:hidden block rounded-full font-bold px-5 py-1.5 text-center text-white md:text-black">
                Login
              </button>
              <div className="w-3"></div>
            </li>
            <li className="w-full pb-5">
              <button className="w-full md:hidden block rounded-full bg-[hsl(180,66%,49%)] font-bold text-white px-5 py-1.5 text-center hover:bg-[hsl(180,79%,87%)]">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
