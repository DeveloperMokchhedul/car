import React from "react";

function Company({ image, title, from }) {
  return (
    <>
      <div className=" col-span-6 md:col-span-4 flex ">
        <div className="">
          <div className="flex items-center gap-2 md:gap-4">
            <img className=" w-[42px] h-[22px]" src={image} alt="" />
            <div>
              <h1 className="text-[18px] font-bold">{title}</h1>
              <p className="text-[14px]">from ${from}k</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
