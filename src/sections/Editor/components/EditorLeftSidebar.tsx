"use client";
import { useFile } from "@/Hooks/useFile";
import Folder from "@/components/Folder/Folder";
import React from "react";
const EditorLeftSidebar = ({ className }: { className: string }) => {
  const { handleInsertNode, explorerData } = useFile();

  return (
    <div
      className={` flex-col  w-[300px] bg-[#13161A]  rounded-md p-5 ${className} `}
    >
      <div className="text-sm w-full border-b pb-3 border-borderColor">
        Folders & Files
      </div>{" "}
      <div className="overflow-x-auto flex-1 h-[450px] ">
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
    </div>
  );
};

export default EditorLeftSidebar;
