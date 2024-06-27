import React from "react";

type ApplicantsProps = {
  text: string;
  number: number;
  icon: React.ReactNode;
};
const Applicants = ({ text, number, icon }: ApplicantsProps) => {
  return (
    <>
      <div className="w-[336px] h-[42px] flex items-center justify-between">
        <div className="w-[135px] h-[42px] p-[10px] gap-[5px] flex items-center justify-center">
          <div className=" w-5 h-5">
            <div className="w-[16.67px] h-[15px] top-[2.5px] left-[1.67px] text-[rgba(79,79,79,1)]">
              {icon}
            </div>
          </div>

          <div className="w-[81px] h-[22px] font-500 text-[16px] leading-[21.6px] text-[rgba(79,79,79,1)]">
            {text}
          </div>
        </div>

        <div className="w-[57px] h-[39px] pt-[6px] pb-[6px] pl-[10px] pr-[10px] gap-[10px] flex">
          <div className="w-[37px] h-[27px] font-600 text-[14px] leading-[27px] text-[rgba(61,61,61,1)]">
            {number}
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicants;
