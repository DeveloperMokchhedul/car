import React from 'react'
import Button from '../common/Button'

function Hero() {
  return (
    <>
      <div className='my-[129px] PrimaryContainer mx-auto text-center font-inter'>
        <div className='leading-[58px]'>
          <p className='text-[16px] text-[#9A9EA7]'>Meet your new car</p>
          <h1 className='text-[64px] font-bold'>Honda Civic Type R</h1>
          <div className='flex gap-10 justify-center items-center mt-10'>
            <Button title={"More Details"} style=" w-[164px] h-[48px] bg-[#F5F6F7] rounded-[10px] text-[#9A9EA7] font-bold flex justify-center items-center text-center" />
            <Button title={"Test Drive"} style="bg-[#7963F0] w-[164px] h-[48px] rounded-[10px] text-white font-bold flex justify-center items-center text-center" />
          </div>

          <div className='mt-40 relative'>
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
