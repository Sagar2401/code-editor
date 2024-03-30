import React, { useState } from "react";
import defaulData from "../Data/Default";
import fileAddCommonFunction from "@/utils/fileAdd";

export const useFile = () => {
  const { insertNode } = fileAddCommonFunction();
  const [explorerData, setExplorerData] = useState(defaulData);
  const [expand, setExpand] = useState(false);
  const [updateId, setUpdateId] = useState(1);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });
  const [file, setfile] = useState("second");

  /* FILE DATA ARRAY ADD FUNCTION */
  const handleInsertNode = ({
    folderId,
    item,
    isFolder,
  }: {
    folderId: any;
    item: any;
    isFolder: any;
  }) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  /*  FILE AND FOLDER  BUTTON CLICK FUNCTION  */
  const handleNewFolder = ({
    e,
    isFolder,
    id,
  }: {
    e: any;
    isFolder: any;
    id: any;
  }) => {
    setUpdateId(id);
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  /* ADD FILE AND FOLDER FUNCTION */

  const handleOnAddFolder = (e: any) => {
    if (e.code === "Enter" && e.target.value) {
      console.log(updateId);
      handleInsertNode({
        folderId: updateId,
        item: e.target.value,
        isFolder: showInput.isFolder,
      });

      setShowInput({ ...showInput, visible: false });
    }
  };
  return {
    explorerData,
    setExplorerData,
    handleInsertNode,
    expand,
    setExpand,
    showInput,
    setShowInput,
    handleNewFolder,
    handleOnAddFolder,
    file,
    setfile,
  };
};
