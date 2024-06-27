import React from "react";
import SkillTag from "./SkillTag";

const Requirements = () => {
  return (
    <>
      <div className="left-[100px] ml-[93px] mt-8 mb-5 w-[872px] h-[115px] gap-[64px] flex">
        <div className="flex flex-col gap-2 w-[170px]">
          <div className="h-[19px] font-500 text-[14px] leading-[18.9px] text-[rgba(110,109,109,1)]">
            Skills Required
          </div>

          <div className="flex flex-col h-[88px] gap-2 w-max">
            <SkillTag
              text={"Figma"}
              imgSrc={
                "https://s3-alpha-sig.figma.com/img/a057/18e5/8cef2281a092b562908b4c6c49b90170?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOCrkOT~mVKoMo0lX6BvO3HBZAyumj8o5E-rRhrgIhy3jBNbej0zdsUmjVz3lJdTeh5W4GBatzEu4BMCFHeY2o8PTwltt6stxNWLTJEhZLkz9XfOuXBZfzvc73igGbqXSEE2cmSaZw-hrG-C6kc-j9Nuy3rUMUSLnNt6WQ~5yuTz~J026z7o7~-5Z~v24ZJUO2r346dRZ94HRFP9KJJunt1eShfM9Aok~GEmsWybUp-yF4hDjxs79rEsGN3xP7xDNWFFXNwfC0~w7q2nBfp5M1lhBK-jo2A0UDCzopY2TmPU0kyCj49yoyAyBM2xu6ALjZC9Z36enTOtbFnlI1j57A__"
              }
            />

            <SkillTag
              text={"Adobe Illustrator"}
              imgSrc={
                "https://s3-alpha-sig.figma.com/img/2a9e/347a/670a5f99deb267ece6bbca706e140b2e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbtxqtUW5D~Le83Zm4EHsIg-u6DTtR7~e0uDrMx~zp4KkoEk81147TNQh-LF9VCQrL56Lf8lkZq~NCtBCQd6xMNOeEMQ84xSE2eJSg0d7QJt24Eyv9jrIcOGxc4MvlC3PM4F~gy7P7U8kS~xwZda96bI0LilLcJSYMbldmgRTzSb8e1uo0BVQvYN-wMHNgszwQOfGT6clVh-XRw6fdDRfs0yXyr~XJGPgdNwVME-4cdHiV9GjDl6b7ICx~hClkoOfmtg~gmyQprRjKsPG8SqseLib~q3Q5spTvdokB~3lMYoub1rjLPlwkt0n-cTb~5ZyAbtB1D2mp26UNCVU0ObWQ__"
              }
            />

            <SkillTag
              text={"Adobe XD"}
              imgSrc={
                "https://s3-alpha-sig.figma.com/img/5193/29bf/3209900f02282f5bf4650dc4e0e5e138?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kukk3M2xErA7m-hIOrvFVvnGa31jb4F5Coufo9CxaNGkQyWXycOYfBRNooiltShWa2PbrgRxR4~uLV2quuMfCXB3WAoocLA2kQrZXCVePIm3qG9cAXiAt~2ktFUb79v6xdOQMtRMUjZq7SEvpPb1RqSxLIw3dQXMEVoGVRSwDq3OFiVRFqhdMEsRcEB0zBDfwwQRed0RhNfgv42bMCzIX89ffwNGTdnBDCG7V0BZYZsOM8pKYmwl--eENbiDy~R9KeSb59dCSD80nU0eBhaq3t9ukT835Uh2Rena0--5jkK5zueuZ8etipqbj~6s4BJVawKPjca2XdIt7geIPXArZg__"
              }
            />
          </div>
        </div>

        <div className="w-[170px] h-[49px] flex flex-col gap-2 -ml-3">
          <p className="w-[129px] h-[19px] font-500 text-[10px] leading-[18.9px] text-[rgb(110,109,109,1)]">
            Preferred Language
          </p>

          <p className="h-[22px] font-600 text-[12px] leading-[21.6px] text-[rgb(61,61,61,1)]">
            English
          </p>
        </div>

        <div className="w-[170px] h-[49px] gap-2 flex flex-col -ml-10">
          <p className=" w-8 h-[19px] font-500 text-[10px] leading-[18.9px] text-[rgb(110,109,109,1)]">
            Type
          </p>

          <p className="h-[22px] font-600 text-[14px] leading-[21.6px] text-[rgb(61,61,61,1)]">
            Full-Time
          </p>
        </div>

        <div className="h-[49px] gap-2 flex flex-col -ml-10">
          <p className="h-[19px] font-500 text-[10px] leading-[18.9px] text-[rgb(110,109,109,1)]">
            Years of Experience
          </p>

          <p className="w-max h-[22px] font-600 text-[14px] leading-[21.6px] text-[rgb(61,61,61,1)]">
            3+ Years of Experience
          </p>
        </div>
      </div>
    </>
  );
};

export default Requirements;
