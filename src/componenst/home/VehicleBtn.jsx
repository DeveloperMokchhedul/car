import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

function VehicleBtn({subTitle, title}) {
    return (
        <>
            <div className=' leading-[30px] flex flex-col justify-end px-4  border-r-2 border-black h-[40px]'>
                <p className='text-[12px] text-[#9A9EA7]'>{subTitle}</p>
                <div className='flex justify-between gap-5   '>
                    <h3 className='text-[14px] font-bold text-[#0D0A19]'>{title}</h3>
                    <MdKeyboardArrowDown />

                </div>
            </div>

        </>
    )
}

export default VehicleBtn
