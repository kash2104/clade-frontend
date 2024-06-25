import React from "react";

type SkillTagProps = {
  text: string;
  imgSrc: string;
};
const SkillTag = ({ text, imgSrc }: SkillTagProps) => {
  return (
    <>
      <div className="flex w-max h-6 rounded-sm border-[1px] pt-1 pb-1 pl-[6px] pr-[6px] gap-[3px] text-[rgba(208,213,221,1)]">
        <div className=" h-4 flex gap-2">
          <img src={imgSrc} alt="skillImage" className="w-4 h-4" />

          <p className=" h-4 font-500 text-[12px] leading-[16.2px] text-center">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillTag;
