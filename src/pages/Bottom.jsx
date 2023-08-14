import React from "react";

export default function Bottom() {
  return (
    <div className="bg-[hsl(260,8%,14%)] p-4 w-full">
      <div className="max-w-screen-xl flex md:items-start md:flex-row min-[0px]:flex-col items-center justify-between mx-auto p-4">
        <span className="text-3xl font-black text-white">Shortly</span>
        <div className="flex flex-row items-start md:pl-72">
          <ul className="flex md:flex-row min-[0px]:flex-col min-[0px]:items-center">
            <li className="flex flex-col md:items-start min-[0px]:items-center min-[0px]:pt-8 md:p-0">
              <a href="" className="text-white font-semibold">
                Features
              </a>
              <a
                href=""
                className="text-white pt-3 hover:text-[hsl(180,66%,49%)]"
              >
                Link Shortening
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Branded Links
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Analytics
              </a>
            </li>
            <li className="flex flex-col md:items-start md:pl-16 min-[0px]:items-center min-[0px]:pt-5 md:p-0">
              <a href="" className="text-white font-semibold">
                Resource
              </a>
              <a
                href=""
                className="text-white pt-3 hover:text-[hsl(180,66%,49%)]"
              >
                Blog
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Developers
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Support
              </a>
            </li>
            <li className="flex flex-col md:items-start md:pl-16 min-[0px]:items-center min-[0px]:pt-5">
              <a href="" className="text-white font-semibold">
                Company
              </a>
              <a
                href=""
                className="text-white pt-3 hover:text-[hsl(180,66%,49%)]"
              >
                About
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Our Team
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Careers
              </a>
              <a href="" className="text-white hover:text-[hsl(180,66%,49%)]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex min-[0px]:pt-5">
          <i class="fa-brands fa-square-facebook text-white p-2 text-xl"></i>
          <i class="fa-brands fa-twitter text-white p-2 text-xl"></i>
          <i class="fa-brands fa-pinterest text-white p-2 text-xl"></i>
          <i class="fa-brands fa-instagram text-white p-2 text-xl"></i>
        </div>
      </div>
    </div>
  );
}
