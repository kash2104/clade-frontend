'use client'

import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <div className="w-100vw h-[1326px] -top-[700px] -left-[390px] bg-[#FCFCFC]">
        <div className="text-black flex flex-col">
          <div className="w-full bg-[#FFFFFF] top-6">
            <NavBar/>
          </div>
        </div>
      </div>
    </>
  );
}
