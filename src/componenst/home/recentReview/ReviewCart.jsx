import React from 'react'
import { FaStar } from "react-icons/fa";


function ReviewCart({ image,title,description, name, role, review, total, cimage }) {
    return (

        <>
            <div className='col-span-12 px-3 md:px-0 md:col-span-4 mt-10 '>
                <img className='imageHover'  src={image} alt="" />
                <h3 className='text-[16px] font-bold pt-3 px-3'>{title}</h3>
                <p className='text-[14px] text-[#9A9EA7] tracking-wider px-3'>{description}</p>
                <div className='flex items-center gap-2 py-5 px-3'>
                    <div className='flex flex-row gap-20 justify-between items-center '>
                        <div className='flex gap-3 items-center '>
                            <img className='w-[24px] h-[24px]' src={cimage} alt="" />
                            <div>
                                <h3 className='text-[10px] md:text-[14px]'>{name}</h3>
                                <p className='text-[10px] md:text-[12px]'>{role}</p>
                            </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                            <FaStar className='text-yellow-600' />
                            <p>{review}({total})</p>
                        </div>

                    </div>

                </div>
            </div>


        </>



    )
}

export default ReviewCart
