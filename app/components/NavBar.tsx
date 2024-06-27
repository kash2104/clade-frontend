import React from "react";
import JobBar from "./JobBar";
import { BsBell } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    <>
      <div className="h-[61px] mt-6 ml-8 flex justify-between">
        <div className="w-[100px] py-[9px] px-[28px] gap-[10px] bg-[#E7E7E7] flex items-center justify-center">
          <p className="w-[47px] h-[27px] text-[20px] leading-[27px] font-700 text-[#DC4A2D] top-[20%]">
            Logo
          </p>
        </div>

        <div className="w-[538px] h-[74px] top-[17px] left-[595px]">
          <JobBar />
        </div>

        <div className=" w-[134px] h-[60px] p-[10px] gap-4 flex items-center">
          <div className="w-[32px] h-[32px] relative">
            <div className="w-[23.3px] h-[25.33px] mt-[2.67px] left-[4.35px] text-[#000000] text-[20px]">
              <BsBell />
            </div>

            <div className="w-[6px] h-[6px] text-[#DC4A2D] absolute top-0 right-0" />
          </div>

          <div className="w-[66px] h-[40px] gap-[6px] flex items-center cursor-pointer">
            <div className="w-[40px] h-[40px]">
              <img
                className="rounded-[60px]"
                src="https://s3-alpha-sig.figma.com/img/7622/cd8b/0141197fff7d64b94226a8c17be3edce?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l4Y8yiQzPLyWBrt9QqkZn7pR9okvDvC3NgGSV0UGkZuif1-plYp3IhOBV9zw~Y1G4~M~pSheAtnedkSiFzfvqxS1fjySDbX7Zaq8CficHwF10YRGHeGn0zCc9BwvPkqhDzf7tY6lg6lSaAZzUujt5zZ-QEk7WU~qCI~vZo5tpoUmE4KvJmAGIaoHnm5WHe6cg72RJ~NVhCU~1AV9mBVQHKGlohMZM3if9KzQlAq~xSN7O1HoDQP7hyaascss9aWBVsh7SHG~m91DwYa8TfnPrcAY~uBpYzDed8qWVC-x7mkgYM9fRkwiHbxD9rvbSq08mC-dRvKzdt40pdf4TTaFBA__"
              />
            </div>

            <div className="w-[20px] h-[20px]">
              <div className="w-[10px] h-[5px] top-[7.5px] left-[5px] text-black">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
