import React from 'react'
import { FaStar } from "react-icons/fa";


function ReviewCart({ image,title,description, name, role, review, total, cimage }) {
    return (

        <>
            <div className='col-span-4 mt-10 '>
                <img src={image} alt="" />
                <h3 className='text-[16px] font-bold pt-3'>{title}</h3>
                <p className='text-[14px] text-[#9A9EA7]'>{description}</p>
                <div className='flex items-center gap-2 py-5'>
                    <div className='flex flex-row gap-20 justify-between items-center '>
                        <div className='flex gap-3'>
                            <img src={cimage} alt="" />
                            <div>
                                <h3 className='text-[14px]'>{name}</h3>
                                <p className='text-[12px]'>{role}</p>
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
