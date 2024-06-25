"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import JobPreviewBar from "./components/JobPreviewBar";
import JobHeading from "./components/JobHeading";
import Requirements from "./components/Requirements";

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
            <div className="flex w-[76.331019%] flex-col">
              <div className="border border-r-[rgba(231,231,231,1)]">
                <JobHeading />
              </div>
              <div className="border border-r-[rgba(231,231,231,1)]">
                <Requirements />
              </div>
            </div>

            {/* right side delete job section */}
            <div className="flex-col"></div>
          </div>
        </div>
      </div>
    </>
  );
}
