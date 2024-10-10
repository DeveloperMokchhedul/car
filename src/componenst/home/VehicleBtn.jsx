import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

function VehicleBtn({subTitle, title}) {
    return (
        <>
            <div className='  md:leading-[30px] flex flex-col md:justify-end px-1 md:px-4 border-none  md:border-r-2 border-black h-[40px]'>
                <p className='text-[12px] text-[#9A9EA7]'>{subTitle}</p>
                <div className='flex justify-center md:justify-between gap-5   '>
                    <h3 className='text-[12px] md:text-[14px] font-bold text-[#0D0A19]'>{title}</h3>
                    <MdKeyboardArrowDown />

                </div>
            </div>

        </>
    )
}

export default VehicleBtn
