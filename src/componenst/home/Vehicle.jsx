import React from "react";
import Title from "../common/Title";
import { IoIosSearch } from "react-icons/io";

function Vehicle() {
  return (
    <>
<div className="md:container mx-auto mt-10 px-5 md:px-0">
  <Title title="Which vehicles you are looking for?" />
  <div className="flex md:flex-row flex-col gap-5 md:gap-12  justify-center my-16 md:h-[40px] ">

    <div className="md:border-r-2 pr-3 h-full flex flex-col md:justify-between">
      <p className="text-[14px] font-normal text-[#9A9EA7]">Type</p>
      <select name="type" id="" className="pr-10 h-full">
        <option value="">Used Cars</option>
        <option value="">New</option>
        <option value="">CPO</option>
      </select>
    </div>

  
    <div className="md:border-r-2 pr-3 h-full flex flex-col justify-between">
      <p className="text-[14px] font-normal text-[#9A9EA7]">Make</p>
      <select name="make" id="" className="pr-10 h-full ">
        <option value="">Infinity</option>
        <option value="">Infinity1</option>
        <option value="">Infinity2</option>
        <option value="">Infinity3</option>
      </select>
    </div>

    
    <div className="md:border-r-2 pr-3 h-full flex flex-col justify-between">
      <select name="year" id="" className="pr-10 h-full">
        <option value="">Year</option>
        <option value="">2024</option>
        <option value="">2023</option>
        <option value="">2022</option>
        <option value="">2021</option>
        <option value="">2020</option>
      </select>
    </div>

  
    <div className="md:border-r-2 pr-3 h-full flex flex-col justify-between">
      <select name="model" id="" className="pr-10 h-full">
        <option value="">Model</option>
        <option value="">model1</option>
        <option value="">model2</option>
        <option value="">model3</option>
        <option value="">model4</option>
        <option value="">model5</option>
      </select>
    </div>

  
    <div className="md:border-r-2 pr-3 h-full flex flex-col justify-between">
      <select name="price" id="" className="pr-10 h-full">
        <option value="">Price</option>
        <option value="">10L</option>
        <option value="">8L</option>
        <option value="">7L</option>
        <option value="">6L</option>
        <option value="">5L</option>
      </select>
    </div>

  
    <div className="flex py-2 hover:scale-105 duration-200 mx-auto px-5 gap-3 items-center h-full bg-[#7963F0] md:px-3 rounded-md text-white">
      <IoIosSearch  className=""/>
      <button>Search</button>
    </div>
  </div>
</div>

    </>
  );
}

export default Vehicle;
