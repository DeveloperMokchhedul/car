import React from 'react'
import Button from '../common/Button'

function Hero() {
  return (
    <>
      <div className='my-[40px] md:PrimaryContainer mx-auto text-center font-inter px-5 md:px-0'>
        <div className='leading-[58px]'>
          <p className='text-[16px] text-[#9A9EA7]'>Meet your new car</p>
          <h1 className='text-[30px] md:text-[64px] font-bold'>Honda Civic Type R</h1>
          <div className='flex gap-10 justify-center items-center mt-5'>
            <Button title={"More Details"} style="duration-150 md:w-[164px] px-3 md:px-0 h-[40px] md:h-[48px] bg-[#F5F6F7] hover:bg-[#f5f6f1] hover:scale-110 rounded-[10px] text-[#9A9EA7] font-bold flex justify-center items-center text-center" />
            <Button title={"Test Drive"} style="bg-[#7963F0] md:w-[164px] px-3 md:px-0 h-[40px] md:h-[48px] rounded-[10px]  hover:scale-110 duration-150 hover:bg-[#7993F9] text-white font-bold flex justify-center items-center text-center" />
          </div>

          <div className='mt-20 relative'>
            <div>
              <img className=' absolute md:-top-14 md:translate-x-20' src="/images/carshadow.png" alt="Car Shadow" />
              <img className='absolute -translate-y-[30px] md:translate-y-0  md:translate-x-[230px]' src="/images/Price.png" alt="" />
            </div>
            <img className='z-10 relative translate-x-0 md:translate-x-40 ' src="/images/car.png" alt="Car" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
