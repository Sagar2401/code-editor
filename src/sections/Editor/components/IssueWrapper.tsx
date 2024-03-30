import { data } from "@/Data/issueData";
import Breadcrumbs from "@/components/Breadcrumb";
import Flag from "@/svgs/Flag";
import InfoIcon from "@/svgs/InfoIcon";
import Rarrow from "@/svgs/Rarrow";
import { generateRandomColorHex } from "@/utils/colorgen";
import React, { useState } from "react";

const initialBread = ["Count of Issues "];
const initialIssueData = {
  title: "",
  id: null,
  number: 0,
  issue: [],
};

const IssueWrapper = () => {
  const [active, setActive] = useState(0);
  const [BreadcrumbsList, setBreadcrumbsList] = useState(["Count of Issues "]);
  const [details, setDetails] = useState({ desc: "", reme: "" });
  const [issueId, setIssueId] = useState<any>();
  const [issueData, setIssueData] = useState<any>({
    title: "",
    id: null,
    number: 0,
    issue: [],
  });
  console.log("issueId", issueData, issueId, issueData.issue[Number(issueId)]);
  return (
    <div className={` flex-col flex  w-[380px] bg-[#13161A] rounded-md p-5 `}>
      <div className="text-sm w-full border-b pb-3 border-borderColor">
        <Breadcrumbs data={BreadcrumbsList} />
        {/* Count of Issues {issueData.id ? `/ ${issueData.title}` : ""} */}
      </div>
      <div className="overflow-x-auto flex flex-col gap-3 h-full pt-3 ">
        {issueId ? (
          <div className="bg-[#1E232B] justify-between rounded-md flex items-center flex-row px-3 py-2">
            <div className="py-1 w-[80%] items-center flex gap-3 px-3 pr-4 text-sm ">
              <div
                style={{ background: generateRandomColorHex() }}
                className={` h-2 w-2 rounded-full`}
              ></div>{" "}
              #{issueId}. {issueData?.issue[Number(issueId)]?.title}
            </div>
          </div>
        ) : issueData?.id ? (
          <div className="bg-[#1E232B] rounded-md flex items-center flex-row p-3">
            <div className="py-1 w-[35%] items-center flex gap-3 px-3 pr-4 text-2xl font-bold border-r border-borderColor">
              <div
                style={{ background: generateRandomColorHex() }}
                className={` h-2 w-2 rounded-full`}
              ></div>
              {issueData?.issue?.length}
            </div>
            <div
              className="px-4 w-full cursor-pointer
              items-center text-sm  flex justify-between"
            >
              {issueData?.title} <Rarrow />
            </div>
          </div>
        ) : (
          <div className="flex gap-2  p-2 bg-[#1E232B] rounded-md">
            <div
              className={`py-1 text-sm cursor-pointer text-center px-5 w-full font-sm rounded-md ${
                active === 0 ? "bg-primary  text-white" : " text-[#5D677D]"
              }`}
              onClick={() => setActive(0)}
            >
              Current File
            </div>
            <div
              onClick={() => setActive(1)}
              className={`py-1 text-sm cursor-pointer text-center px-5 w-full text-white font-sm rounded-md ${
                active === 1 ? "bg-primary  text-white" : " text-[#5D677D]"
              }`}
            >
              Full Project
            </div>
          </div>
        )}
        <div className="flex flex-col overflow-y-auto gap-2 h-full w-full">
          {issueId ? (
            <div>
              <div className=" bg-[#1E232B] w-full  flex-1 rounded-t-md px-3 py-3 flex flex-col ">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-sm font-bold text-primary">
                    Description:
                    <br />
                  </span>
                  <span className=" text-sm text-white">
                    {details.desc}
                    {/* {issueData?.item[Number(issueId)]?.desc} */}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span className="text-sm font-bold text-primary">
                    Remediation:
                    <br />
                  </span>
                  <span className=" text-sm text-white">
                    {details.reme}

                    {/* {issueData?.item[Number(issueId)]?.reme} */}
                  </span>
                </div>
              </div>
              <div className="text-sm rounded-b-md  bg-[#1E232B] sticky bottom-0 flex flex-row-reverse items-center gap-2 w-full border-t p-3 border-borderColor">
                <button
                  type="button"
                  className="border border-red-600 rounded-md text-white px-4 py-3"
                >
                  <Flag />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIssueData(initialIssueData);
                    setBreadcrumbsList(initialBread);
                    setIssueId(null);
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Auto Fix Code
                </button>
              </div>
            </div>
          ) : issueData?.id ? (
            <>
              <div className="text-sm w-full border-b pb-3 border-borderColor">
                List of Issues
              </div>
              <div className="flex  flex-col gap-2 overflow-y-auto h-full ">
                {issueData?.issue.map((item: any) => (
                  <div
                    key={item.id}
                    className="bg-[#1E232B] justify-between rounded-md flex items-center flex-row px-3 py-2"
                    onClick={() => {
                      setIssueId(item.id);
                      setDetails({ desc: item.desc, reme: item.reme });
                      setBreadcrumbsList([
                        ...BreadcrumbsList,
                        `Issue #${item.id}`,
                      ]);
                    }}
                  >
                    <div className="py-1 w-[80%] items-center flex gap-3 px-3 pr-4 text-sm ">
                      #{item.id}. {item.title}
                    </div>
                    <div
                      className="px-2 pl-4 cursor-pointer
              items-center text-sm  border-l h-full border-borderColor flex justify-between"
                    >
                      <Rarrow />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            data.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E232B] rounded-md flex items-center flex-row p-3"
                onClick={() => {
                  setBreadcrumbsList([...BreadcrumbsList, item.title]);
                  setIssueData(item);
                }}
              >
                <div className="py-1 w-[35%] items-center flex gap-3 px-3 pr-4 text-2xl font-bold border-r border-borderColor">
                  <div
                    style={{ background: generateRandomColorHex() }}
                    className={` h-2 w-2 rounded-full`}
                  ></div>
                  {item.issue.length}
                </div>
                <div
                  className="px-4 w-full cursor-pointer
              items-center text-sm  flex justify-between"
                >
                  {item.title} <Rarrow />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="text-sm flex items-center gap-2 w-full border-t p-3 border-borderColor">
        {issueId ? (
          <div className="text-xs flex gap-2">
            <InfoIcon /> Changes done in the code can be undone.
          </div>
        ) : (
          <>
            <input
              id="inline-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            Exclude Dependencies{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default IssueWrapper;
