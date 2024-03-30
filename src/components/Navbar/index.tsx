"use client";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  "AI Audit",
  "Manual Audit",
  "RedTeam",
  "Monitor",
  "Incident Response",
];
const Navbar = () => {
  const [first, setfirst] = useState(data[0]);
  return (
    <div className="flex rounded-lg w-full items-center justify-between bg-[#191D23]">
      <div className="px-12 py-3 border-r-2 border-[#ffffff14]">
        <Image alt="" width={128} height={28} src={"/QuillShield Logo.png"} />
      </div>
      <div className="flex">
        <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {data.map((item) => (
              <li className="me-2" key={item} onClick={() => setfirst(item)}>
                <a
                  href="#"
                  className={`inline-block p-4 border-b-2  rounded-t-lg  ${
                    item === first
                      ? " text-blue-600 hover:text-blue-600 border-blue-600"
                      : " hover:border-gray-300  hovertext-gray-600 border-transparent  "
                  } `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-6 py-3 border-l-2 items-center flex gap-2 border-[#ffffff14]">
          <div className="h-7 rounded-full relative overflow-hidden w-7">
            <Image alt="" src={"/DP.png"} fill />
          </div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Johhny Doe
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
