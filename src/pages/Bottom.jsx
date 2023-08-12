import React from "react";

export default function Bottom() {
  return (
    <div className="bg-[hsl(260,8%,14%)] p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <span className="text-3xl font-black text-white">Shortly</span>
        <div>
          <ul className="flex">
            <li className="flex flex-col">
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
            <li className="flex flex-col pl-16">
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
            <li className="flex flex-col pl-16">
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
        <div className="flex">
          <i class="fa-brands fa-square-facebook text-white p-2"></i>
          <i class="fa-brands fa-twitter text-white p-2"></i>
          <i class="fa-brands fa-pinterest text-white p-2"></i>
          <i class="fa-brands fa-instagram text-white p-2"></i>
        </div>
      </div>
    </div>
  );
}
