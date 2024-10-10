import React from "react";

function Footer() {
  return (
    <>
      <div className="container mx-auto bg-white py-3 flex justify-between ">
        <div className="flex gap-5 ">
          <ul className="flex gap-5 text-inter font-bold">
            <li>Privacy Policy</li>
            <li>Term of Use</li>
          </ul>
          <p>© 2021 All rights reserved</p>
        </div>
        <div>
            <ul className="flex gap-3">
                <li>English</li>
                <li>...USD</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
