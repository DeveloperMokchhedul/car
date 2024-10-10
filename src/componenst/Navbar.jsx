import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

function Navbar() {
    const menu = [
        { label: "Used Cars", path: "/usedcars" },
        { label: "Auctions", path: "/auctions" },
        { label: "New Cars", path: "/newcars" },
        { label: "Sell Cars", path: "/sellcars" },
        { label: "Local Dealers", path: "/localdealers" },
        { label: "Support", path: "/support" },
    ]
    return (
        <>
            <div className='PrimaryContainer mx-auto h-[40px] mt-[21px] flex justify-between items-center'>
                <NavLink to={"/"}><img className='imageHover' src="/images/logo.png" alt="" /></NavLink>
                <div className='flex gap-12 items-center'>
                    <div>
                        <ul className='flex gap-10 font-inter text-[16px] font-semibold'>
                            {
                                menu.map((item, index) => (
                                    <li key={index}>
                                        <NavLink to={item.path} 
                                        className={({isActive})=>(isActive?"text-red-600 border-b border-red-600 ":"text-black hover:text-red-500")}
                                        >{item.label}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <CgProfile className='hoverImage' />
                        <NavLink to={"/signup"} className='text-[14px] text-[#9A9EA7]'>Sign up</NavLink>
                    </div>

                </div>



            </div>


            <Outlet />
        </>
    )
}

export default Navbar
