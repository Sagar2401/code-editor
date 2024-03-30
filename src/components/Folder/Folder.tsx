import React, { useState } from "react";
import style from "./Folder.module.css";
import { useFile } from "@/Hooks/useFile";
import OutlineFolder from "@/svgs/OutlineFolder";
import FilledFolder from "@/svgs/FilledFolder";
import ErrowD from "@/svgs/ErrowD";
import ErrowR from "@/svgs/ErrowR";
import FilledBlueFile from "@/svgs/FilledBlueFile";
import FilledGrayFile from "@/svgs/FilledGrayFile";

const Folder = ({
  handleInsertNode,
  explorer,
}: {
  handleInsertNode: any;
  explorer: any;
}) => {
  const {
    showInput,
    setShowInput,
    expand,
    setExpand,
    handleOnAddFolder,
    handleNewFolder,
    file,
    setfile,
  } = useFile();

  return (
    <div className="">
      {explorer.isFolder ? (
        <>
          <div className="mt-1 ">
            <div onClick={() => setExpand(!expand)} className="mt-1 ">
              <span className="flex gap-3 cursor-pointer items-center">
                {expand ? (
                  <>
                    <ErrowD />
                    <OutlineFolder />
                  </>
                ) : (
                  <>
                    <ErrowR />

                    <FilledFolder />
                  </>
                )}{" "}
                {explorer.name}
              </span>

              <div className="">
                <div>
                  <div
                    onClick={(e) => {
                      //@ts-ignore
                      handleNewFolder(e, true, explorer.id);
                    }}
                  />
                </div>
                <div>
                  <div
                    onClick={(e) => {
                      //@ts-ignore
                      handleNewFolder(e, false, explorer.id);
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{ display: expand ? "flex" : "none", paddingLeft: 25 }}
              className="flex flex-col"
            >
              {showInput.visible && (
                <div className="">
                  <span className="">{showInput.isFolder ? "📁" : "📄"}</span>
                  <input
                    type="text"
                    className=""
                    autoFocus
                    onKeyDown={handleOnAddFolder}
                    onBlur={() =>
                      setShowInput({ ...showInput, visible: false })
                    }
                  />
                </div>
              )}

              {explorer.items.map((exp: any) => {
                return (
                  <Folder
                    handleInsertNode={handleInsertNode}
                    key={exp.id}
                    explorer={exp}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <span
            className={` flex ml-4 my-2 items-center gap-3 ${
              explorer.id === file ? "text-primary" : "text-white"
            }`}
            onClick={() => setfile(explorer.id)}
          >
            {explorer.id === file ? <FilledBlueFile /> : <FilledGrayFile />}
            {explorer.name}
          </span>
        </>
      )}
    </div>
  );
};

export default Folder;
