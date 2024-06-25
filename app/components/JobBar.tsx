import React, { useState } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { PiBagSimple, PiHandCoins } from 'react-icons/pi'

const JobBar = () => {
    const[active, setActive] = useState('jobs');
  return (
    <>
        <div className='w-[538px] h-[61px] border-[0.5px] rounded-[36px] border-[#D1D1D1] flex justify-around items-center'>
            <div className={`w-[79px] h-[27px] top-[24px] left-[23px] gap-1 flex bg-[#DC4A2D] rounded-full p-5 justify-center items-center cursor-pointer`}>
                <div className='w-6 h-6 flex justify-center items-center'>
                    <div className=' w-5 h-[18px] top-[3px] left-[2px] text-[#FFFFFF]'>
                        <PiBagSimple/>
                    </div>
                    
                </div>

                <div className='w-[47px] h-[27px] font-sans font-500 text-[20px] leading-[27px] text-[#FFFFFF]'>
                    Jobs
                </div>
            </div>

            <div className='w-[128px] h-[27px] top-6 left-[182px] gap-1 flex cursor-pointer items-center justify-center'>
                <div className='w-6 h-6 flex justify-center items-center relative'>
                    <div className='w-[18px] h-[18.46px] top-[3px] left-[3px]text-[#B0B0B0]'>
                        <FiMessageSquare/>
                    </div>

                    <div className='absolute w-[6px] h-[6px] text-[#DC4A2D] rounded-full top-0 right-0'>

                    </div>
                </div>

                <div className='w-[96px] h-[27px] font-500 text-[20px] leading-[27px] text-[#B0B0B0]'>
                    Messages
                </div>
            </div>

            <div className=' w-[125px] h-[27px] top-[24px] left-[390px] gap-1 flex cursor-pointer items-center justify-center'>
                <div className=' w-6 h-6 flex justify-center items-center'>
                    <div className=' w-5 h-5 top-[2px] left-[2px]text-[#B0B0B0]'>
                        <PiHandCoins/>
                    </div>
                </div>

                <div className='text-[20px] leading-[27px] font-500 text-[#B0B0B0]'>
                    Payments
                </div>
            </div>
        </div>
    </>
  )
}

export default JobBar
