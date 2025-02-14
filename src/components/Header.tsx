import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <div className="border border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
                <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaFacebook/>
                </a >
           </div>
           <div className="header_top_icon_wrapper">
                <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaInstagram/>
                </a>
           </div>
           <div className="header_top_icon_wrapper">
                <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaTiktok/>
                </a>
           </div>
           <div className="header_top_icon_wrapper">
                <a
                href="https://github.com/Deltioner/store"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub/>
                </a>
           </div>
          </div>

           <div className="text-gray-500 text-[12px">
            <b>FREE SHIPPING</b> THIS WEEK ORDER OVER -$55
           </div>

           <div className="flex gap-4">
            <select
               className="text-gray-500 text-[12px] w-[70px]"
               name="currency"
               id="currency"
            >
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
                <option value="YER ⍷">YER ⍷</option>
            </select>

            <select
               className="text-gray-500 text-[12px] w-[70px]"
               name="language"
               id="language"
            >
                <option value="English">English</option>
                <option value="Ndederland">Nederland</option>
                <option value="Arabic">العربية</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
