import React from 'react'
import { GoDotFill } from "react-icons/go";
import Button from './Button';

function CarCard({image,title,spend,train,engine,many }) {
    return (
        <>
            <div className='col-span-12 md:col-span-4 mt-10 '>
                <img className='imageHover' src={image} alt="" />
                <h3 className='text-[16px] font-bold pt-3'>{title}</h3>
                <p className='text-[14px] text-[#9A9EA7]'>{spend}</p>
                <div className='flex justify-center md:justify-normal gap-2 py-5 '>
                    <p className='text-[#9A9EA7] '>{train}</p>
                    <span className='text-sm text-[#9A9EA7]'><GoDotFill /></span>
                    <p className='text-[#9A9EA7]'>{engine}</p>
                </div>
                <div className='gap-2 flex justify-center md:justify-normal'>
                    <Button 
                    title = {`$${many}`}
                    style={"bg-[#7963F0] px-5 py-3 font-bold text-[12px] rounded-[8px] "}
                    />
                    <Button 
                    title = {"Bestseller"}
                    style={"bg-[#f5F6F7] px-5 py-3 font-bold text-[12px] rounded-[8px]"}
                    />
                </div>
            </div>
       

        </>
    )
}

export default CarCard
