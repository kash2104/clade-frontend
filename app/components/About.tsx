import React from "react";

const About = () => {
  return (
    <>
      <div className="left-[100px] ml-[100px] mt-10 mb-5 w-[526px] gap-2 flex flex-col top-[379px]">
        <div className="h-[19px] gap-2">
          <div className="h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(110,109,109,1)]">
            About the job
          </div>
        </div>

        <div className="w-full font-500 text-[16px] leading-7 text-[rgba(61,61,61,1)]">
          <div className="flex flex-col gap-4 justify-center">
            <ol className="list-decimal pl-5">
              <li>Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li>Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related
                works
              </li>
            </ol>

            <div className="flex flex-col gap-1">
              <p>Benefits:</p>
              <ul className="list-disc pl-6">
                <li>Health insurance</li>
                <li>Provident Fund</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p>Schedule</p>
              <ul className="list-disc pl-6">
                <li>Day Shift</li>
              </ul>
            </div>

            <div className="flex flex-col gap-1">
              <p>Supplemental pay types</p>
              <ul className="list-disc pl-6">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ul>
            </div>

            <div>Work Location: In Person</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
