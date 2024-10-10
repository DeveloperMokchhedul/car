import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const menus = [
    { label: "Used Cars", path: "/" },
    { label: "Auctions", path: "/auctions" },
    { label: "New Cars", path: "/newcars" },
    { label: "Sell Cars", path: "/sellcars" },
    { label: "Local Dealers", path: "/localdealers" },
    { label: "Support", path: "/support" },
  ];


  const handleMenu = ()=>{
    setMenu(!menu)
    
  }



  
  return (
    <>
      <header className="">
        <div className="md:PrimaryContainer mx-auto h-[40px] px-5 pt-[21px] flex justify-between items-center relative">
          <NavLink to={"/"}>
            <img className="imageHover" src="/images/logo.png" alt="" />
          </NavLink>

          {/* mobile  */}
          {menu ? (
            <ImCross onClick={handleMenu} className="sm:hidden text-2xl absolute right-3"/>
          ) : (
            <GiHamburgerMenu onClick={handleMenu} className=" sm:hidden text-3xl absolute right-3"  />
          )}

          {menu && (
            <div className="gap-12 z-50 items-center sm:hidden transition-all duration-300 ease-in-out">
              <div>
                <ul className="flex-col font-inter text-[16px] font-semibold absolute top-0 left-40">
                  {menus.map((item, index) => (
                    <li key={index} className="mt-5" onClick={()=>setMenu(false)}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "text-red-600 border-b border-red-600 "
                            : "text-black hover:text-red-500"
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className='flex gap-5 items-center'>
                        <CgProfile className='hoverImage' />
                        <NavLink to={"/signup"} className='text-[14px] text-[#9A9EA7]'>Sign up</NavLink>
                    </div> */}
            </div>
          )}

          {/* desktop */}
          <div className="gap-12 items-center hidden sm:flex">
            <div>
              <ul className="flex gap-10 font-inter text-[16px] font-semibold">
                {menus.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-red-600 border-b border-red-600 "
                          : "text-black hover:text-red-500"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-5 items-center">
              <CgProfile className="hoverImage" />
              <NavLink to={"/signup"} className="text-[14px] text-[#9A9EA7]">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
