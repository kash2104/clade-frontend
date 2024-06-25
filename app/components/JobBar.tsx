import React, { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { PiBagSimple, PiHandCoins } from "react-icons/pi";

const JobBar = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="w-[538px] h-[61px] border-[0.5px] rounded-[36px] border-[#D1D1D1] flex justify-around items-center">
        <div
          className={`h-[27px] top-[24px] left-[23px] gap-1 flex justify-center items-center p-5 cursor-pointer transition-all duration-200 ${
            activeTab === "jobs"
              ? "bg-[#DC4A2D] rounded-full text-[#FFFFFF] w-[109px]"
              : "bg-transparent text-[#B0B0B0] w-[79px]"
          }`}
          onClick={() => handleTabClick("jobs")}
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <div className="w-5 h-[18px] top-[3px] left-[2px]">
              <PiBagSimple />
            </div>
          </div>
          <div
            className={`w-[47px] h-[27px] font-sans font-500 text-[20px] leading-[27px]`}
          >
            Jobs
          </div>
        </div>

        <div
          className={`w-[128px] h-[27px] top-6 left-[182px] gap-1 flex cursor-pointer items-center justify-center p-5 transition-all duration-200 ${
            activeTab === "messages"
              ? "bg-[#DC4A2D] rounded-full text-[#FFFFFF] w-[178px]"
              : "bg-transparent text-[#B0B0B0]"
          }`}
          onClick={() => handleTabClick("messages")}
        >
          <div className="w-6 h-6 flex justify-center items-center relative">
            <div className="w-[18px] h-[18.46px] top-[3px] left-[3px]">
              <FiMessageSquare />
            </div>
            <div className="absolute w-[6px] h-[6px] text-[#DC4A2D] rounded-full top-0 right-0" />
          </div>
          <div
            className={`w-[96px] h-[27px] font-500 text-[20px] leading-[27px]`}
          >
            Messages
          </div>
        </div>

        <div
          className={`w-[125px] h-[27px] top-[24px] left-[390px] gap-1 flex cursor-pointer items-center justify-center p-5 transition-all duration-200 ${
            activeTab === "payments"
              ? "bg-[#DC4A2D] rounded-full text-[#FFFFFF] w-[155px]"
              : "bg-transparent text-[#B0B0B0]"
          }`}
          onClick={() => handleTabClick("payments")}
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <div className="w-5 h-5 top-[2px] left-[2px]">
              <PiHandCoins />
            </div>
          </div>
          <div className={`text-[20px] leading-[27px] font-500`}>Payments</div>
        </div>
      </div>
    </>
  );
};

export default JobBar;
