"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import JobPreviewBar from "./components/JobPreviewBar";
import JobHeading from "./components/JobHeading";
import Requirements from "./components/Requirements";
import About from "./components/About";
import Company from "./components/Company";
import { RiDeleteBin6Line, RiUserFollowLine } from "react-icons/ri";
import Button from "./components/Button";
import { MdOutlineEdit } from "react-icons/md";
import Applicants from "./components/Applicants";
import { GoPeople } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className=" h-[1326px] -top-[700px] -left-[390px]">
        <div className="text-black flex flex-col">
          <div className="w-full bg-[#FFFFFF] top-6 mb-10">
            <NavBar />
          </div>

          <div className="w-full h-[67px] border-[1px] border-[rgba(231, 231, 231, 1)] flex items-center">
            <JobPreviewBar />
          </div>

          <div className="flex">
            <div className="flex w-[74.331019%] flex-col">
              <div className="border border-r-[rgba(231,231,231,1)]">
                <JobHeading />
              </div>
              <div className="border border-r-[rgba(231,231,231,1)]">
                <Requirements />
              </div>

              <div className="border border-r-[rgba(231,231,231,1)]">
                <About />
              </div>

              <div className="border border-r-[rgba(231,231,231,1)] border-b-0">
                <Company />
              </div>
            </div>

            {/* right side delete job section */}
            <div className="flex-col h-[361px] gap-6 top-9">
              <div className="flex w-[360px] h-[46px] gap-4 ml-4 mt-4">
                <Button
                  text={"Delete Job"}
                  textColor={"rgba(220,74,45,1)"}
                  bgColor={"rgba(254, 244, 242, 1)"}
                  icon={<RiDeleteBin6Line />}
                />

                <Button
                  text={"Edit Job"}
                  textColor={"rgba(255,255,255,1)"}
                  bgColor={"rgba(220,74,45,1)"}
                  icon={<MdOutlineEdit />}
                />
              </div>

              <div className="w-[360px] rounded-[5px] p-3 gap-4 flex flex-col mt-10 ml-5">
                <Applicants
                  text={"Applicants"}
                  number={400}
                  icon={<GoPeople />}
                />

                <div className="w-[336px] h-[1px] bg-[rgba(231,231,231,1)]"></div>

                <Applicants
                  text={"Matches"}
                  number={100}
                  icon={<RiUserFollowLine />}
                />

                <div className="w-[336px] h-[1px] bg-[rgba(231,231,231,1)]"></div>

                <Applicants
                  text={"Messages"}
                  number={147}
                  icon={<FiMessageSquare />}
                />

                <div className="w-[336px] h-[1px] bg-[rgba(231,231,231,1)]"></div>

                <Applicants
                  text={"Views"}
                  number={800}
                  icon={<IoEyeOutline />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
