"use client";
import React, { useState } from "react";
import EditorHeader from "./components/EditorHeader";
import EditorLeftSidebar from "./components/EditorLeftSidebar";
import RightArrow from "@/svgs/RightArrow";
import EditorWrapper from "./components/EditorWrapper";
import IssueWrapper from "./components/IssueWrapper";

const EditorBox = () => {
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  return (
    <div className="bg-[#191D23]  grow gap-2 flex p-4 flex-col w-full rounded-lg">
      <EditorHeader />
      <div className="flex grow flex-row justify-normal gap-4">
        <EditorLeftSidebar className={showLeftSidebar ? "flex" : "hidden"} />
        <div className="relative   bg-[#13161A]  flex-1 w-[50%]">
          <EditorWrapper />
          <div
            className={`absolute  bottom-3 left-[-10px] cursor-pointer ${
              showLeftSidebar ? "" : "rotate-180"
            }`}
            onClick={() => setShowLeftSidebar(!showLeftSidebar)}
          >
            <RightArrow />
          </div>
          <div
            onClick={() => setShowRightSidebar(!showRightSidebar)}
            className={` absolute bottom-3 right-[-10px] cursor-pointer ${
              showRightSidebar ? "rotate-180" : ""
            }`}
          >
            <RightArrow />
          </div>
        </div>
        <div className={showRightSidebar ? "flex" : "hidden"}>
          <IssueWrapper />
        </div>
      </div>
    </div>
  );
};

export default EditorBox;
