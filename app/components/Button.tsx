import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

type ButtonProps = {
  text: string;
  textColor: string;
  bgColor: string;
  icon: React.ReactNode;
};

const Button = ({ text, textColor, bgColor, icon }: ButtonProps) => {
  return (
    <div
      className="w-[172px] h-[46px] rounded-[8px] border-[0.8px] pt-3 pb-3 pl-6 pr-6 flex items-center justify-center gap-[10px] cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-5 h-5">
        <div
          className="w-[15px] h-[15px] top-[2.5px] left-[2.5px]"
          style={{ color: textColor }}
        >
          {icon}
        </div>
      </div>

      <div
        className="h-[22px] font-500 text-[16px] leading-[21.6px]"
        style={{ color: textColor }}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
