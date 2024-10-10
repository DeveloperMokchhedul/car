import React from 'react'
import Button from '../common/Button'

function Hero() {
  return (
    <>
      <div className='my-[40px] PrimaryContainer mx-auto text-center font-inter'>
        <div className='leading-[58px]'>
          <p className='text-[16px] text-[#9A9EA7]'>Meet your new car</p>
          <h1 className='text-[64px] font-bold'>Honda Civic Type R</h1>
          <div className='flex gap-10 justify-center items-center mt-5'>
            <Button title={"More Details"} style="duration-150 w-[164px] h-[48px] bg-[#F5F6F7] hover:bg-[#f5f6f1] hover:scale-110 rounded-[10px] text-[#9A9EA7] font-bold flex justify-center items-center text-center" />
            <Button title={"Test Drive"} style="bg-[#7963F0] w-[164px] h-[48px] rounded-[10px]  hover:scale-110 duration-150 hover:bg-[#7993F9] text-white font-bold flex justify-center items-center text-center" />
          </div>

          <div className='mt-20 relative'>
            <div>
              <img className=' absolute -top-14 translate-x-20' src="/images/carshadow.png" alt="Car Shadow" />
              <img className='absolute translate-x-[230px]' src="/images/Price.png" alt="" />
            </div>
            <img className='z-10 relative translate-x-40 ' src="/images/car.png" alt="Car" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
