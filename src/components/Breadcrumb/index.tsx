import React from "react";

const Breadcrumbs = ({ data, isnav }: { data: string[]; isnav?: boolean }) => {
  return (
    <ol
      className={`inline-flex  items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-[#7B8191] ${
        isnav ? "my-4" : "my-2"
      } `}
    >
      {data.map((item, i) => (
        <>
          <li className="inline-flex items-center" key={item}>
            <a
              href="#"
              className={`inline-flex  items-center text-xs font-medium  hover:text-blue-600 dark:hover:text-white ${
                data.length - 1 === i ? "text-white" : ""
              }`}
            >
              {item}
            </a>
          </li>{" "}
          {data.length - 1 === i ? "" : <> &nbsp; /</>}
        </>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
