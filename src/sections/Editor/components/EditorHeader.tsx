import FileIcon from "@/svgs/FileIcon";
import React from "react";

const EditorHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between pb-4 border-b border-borderColor w-full">
      <div style={{ gap: "8px" }} className="flex gap-3 items-center">
        <div>
          <FileIcon />
        </div>
        <span className="text-2xl">Sample Project</span>
      </div>
      <div className="flex gap-3 items-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Audit Now
        </button>
        <button
          type="button"
          className="relative text-primary bg-primaryLight font-medium rounded-lg text-sm px-5 py-2.5 "
        >
          Options
          <span
            className=" absolute top-0 right-[-4px] h-3
           w-3
           rounded-full bg-red-700"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default EditorHeader;
