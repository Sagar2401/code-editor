import CrossIcon from "@/svgs/crossIcon";
import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import files from "@/Data/codeData";

const EditorWrapper = () => {
  const filesName = [
    "Example File 1",
    "Example Folder",
    "File 123",
    "Sample File",
  ];
  const editorRef = useRef(null);
  const [fileName, setFileName] = useState("Example File 1");

  const file = files[fileName];

  useEffect(() => {
    editorRef.current?.focus();
  }, [file?.name]);

  return (
    <div className="flex flex-col w-full h-full">
      <ul className="flex  flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {filesName.map((file, i) => (
          <li
            className="border-r border-borderColor"
            key={file}
            onClick={() => setFileName(file)}
          >
            <div
              className={`${
                file === fileName ? "text-white bg-primary" : "text-[#5D677D]"
              } flex gap-4 cursor-pointer items-center px-4 py-3 rounded-t-lg active`}
            >
              {file}
              <CrossIcon active={file === fileName} />
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full h-full">
        <Editor
          height="100%"
          width={"100%"}
          theme="vs-dark"
          path={file?.name}
          defaultLanguage={file?.language}
          defaultValue={file?.value}
          onMount={(editor) => (editorRef.current = editor)}
        />
      </div>
    </div>
  );
};

export default EditorWrapper;
