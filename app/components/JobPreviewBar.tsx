import React, { useState } from "react";

const JobPreviewBar = () => {
  const [active, setActive] = useState("jobPreview");

  const handleClick = (tab: string) => {
    setActive(tab);
  };
  return (
    <>
      <div className=" w-max h-full top-[129px] ml-[93px] gap-[72px] flex">
        <div
          className={`h-full flex items-center font-semibold text-[18px] leading-[27px] cursor-pointer ${
            active === "jobPreview"
              ? "text-[rgb(220,74,45,1)] font-600 border-b-[rgb(220,74,45,1)] border-b-[2px]"
              : "text-[rgb(136,136,136,1)]"
          }`}
          onClick={() => handleClick("jobPreview")}
        >
          Job Preview
        </div>

        <div
          className={`h-full flex items-center font-semibold text-[14px] leading-[27px] cursor-pointer ${
            active === "applicants"
              ? "text-[rgb(220,74,45,1)] font-600"
              : "text-[rgb(136,136,136,1)]"
          }`}
          onClick={() => handleClick("applicants")}
        >
          Applicants
        </div>

        <div
          className={`h-full flex items-center font-semibold text-[16px] leading-[27px] cursor-pointer ${
            active === "match"
              ? "text-[rgb(220,74,45,1)] font-600"
              : "text-[rgb(136,136,136,1)]"
          }`}
          onClick={() => handleClick("match")}
        >
          Match
        </div>

        <div
          className={`h-full flex items-center font-semibold text-[18px] leading-[27px] cursor-pointer ${
            active === "messages"
              ? "text-[rgb(220,74,45,1)] font-600"
              : "text-[rgb(136,136,136,1)]"
          }`}
          onClick={() => handleClick("messages")}
        >
          Messages
        </div>
      </div>
    </>
  );
};

export default JobPreviewBar;
