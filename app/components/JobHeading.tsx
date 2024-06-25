import React from "react";
import { GrLocation } from "react-icons/gr";
import { LiaCoinsSolid } from "react-icons/lia";

const JobHeading = () => {
  return (
    <>
      <div className="flex flex-col left-[100px] ml-[100px] gap-[24px] mt-10 mb-5">
        <div className="flex gap-3 h-[47px] justify-start items-center">
          <div className="h-[47px] font-600 text-[35px] leading-[47.25px] text-[rgba(61,61,61,1)]">
            Senior Product Designer
          </div>

          <div className="w-[4px] h-[4px] border bg-[rgba(209,209,209,1)] rounded-full"></div>

          <div className=" h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(136,136,136,1)]">
            posted 2 days ago
          </div>

          <div className="border bg-[rgba(171,239,198,1)] rounded-full w-[57px] h-[22px] p-1 flex  items-center justify-center gap-[2px]">
            <div className="w-2 h-2 flex items-center">
              <div className="w-[6px] h-[6px] rounded-full bg-[rgba(23,178,106,1)]"></div>
            </div>

            <div className="w-[31px] h-[18px] font-500 text-[12px] text-[rgba(6,118,71,1)] leading-[18px] flex items-center">
              Open
            </div>
          </div>
        </div>

        <div className="w-[370px] h-[27px] gap-4 flex items-center justify-start">
          <div className="w-max h-[27px] gap-2 flex items-center justify-center">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-4 h-5">
                <GrLocation />
              </div>
            </div>

            <div className="font-500 text-[20px] leading-[27px] text-[rgba(93,93,93,1)]">
              Delaware, USA
            </div>
          </div>

          <div className="w-1 h-1 border bg-[rgba(209,209,209,1)] rounded-full"></div>

          <div className="w-[159px] h-[27px] gap-2 flex items-center justify-center">
            <div className="w-6 h-6 flex justify-center items-center">
              <div className="w-5 h-[18px]">
                <LiaCoinsSolid />
              </div>
            </div>

            <div className=" h-[27px] font-500 text-[20px] leading-[27px] text-[rgba(93,93,93,1)]">
              $300k-$400k
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobHeading;
