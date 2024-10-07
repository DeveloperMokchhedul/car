import React from 'react'
import Title from '../common/Title'
import { MdKeyboardArrowDown } from "react-icons/md";
import VehicleBtn from './VehicleBtn';
import Button from '../common/Button';
import { IoIosSearch } from "react-icons/io";

function Vehicle() {
  return (
    <>
      <div className='container mx-auto '>
        <Title
          title="Which vehicles you are looking for ?"
        />

          <div className='shadow-lg shadow-black/25 rounded-b-2xl flex gap-10 items-center my-10  py-5 bg-white   '>
            <VehicleBtn subTitle={"Type"} title={"Used Card"} />
            <VehicleBtn subTitle={"Make"} title={"Infiniti"} />
            <VehicleBtn title={"Year"} />
            <VehicleBtn title={"Model"} />
            <VehicleBtn title={"Price"} />
            <Button icon={<IoIosSearch />} title={"Search"} style=" bg-[#7963F0] w-[164px] h-[48px] rounded-[10px] text-white font-bold flex justify-center items-center text-center" />
          </div>
  


      </div>
    </>
  )
}

export default Vehicle
