import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Header = () => {
  return (
    <div>
      {/* Top bar: Contact info */}
      <div className="bg-[#F7F7F7] px-4 sm:px-[62px] py-2 flex justify-between items-center border-b-2 border-black flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
          <p className={`${roboto.className} font-normal text-black`}>
            Phone Number: 956 742 455 678
          </p>
          <span className="mx-2 sm:mx-4 hidden sm:block">
            <Image src="/Image/Line 3.png" alt="line" width={1} height={1} />
          </span>
          <p className={`${roboto.className} font-normal text-black`}>
            Email:{" "}
            <span className={`${roboto.className} font-normal text-black`}>
              info@ddsgnr.com
            </span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="hidden sm:flex space-x-4 justify-end">
          <Link href={"#"}>
            <FaFacebookSquare className="w-[18px] h-[18px] text-black" />
          </Link>
          <Link href={"#"}>
            <FaInstagram className="w-[18px] h-[18px] text-black" />
          </Link>
          <Link href={"#"}>
            <FaTwitter className="w-[18px] h-[18px] text-black" />
          </Link>
          <Link href={"#"}>
            <FaLinkedin className="w-[18px] h-[18px] text-black" />
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="mt-5 h-[72px] bg-[#F7F7F7] px-4 sm:px-[64px] border-b border-[#676767]">
        <div className="flex justify-between items-center w-full h-[44px] pt-[18px]">
          {/* Logo */}
          <div>
            <Image
              src="/Image/Ddsgnr Library.png"
              alt="logo"
              width={130.6}
              height={30.38}
            />
          </div>

          {/* Desktop Navigation Menu */}
          <div className=" hidden md:flex flex-wrap justify-between items-center bg-white">
            <ul className="flex gap-9 sm:gap-4 w-full sm:w-auto flex-wrap justify-center sm:justify-start mt-4 sm:mt-0">
              <li className={`${roboto.className} p-[10px]`}>Home</li>
              <li className={`${roboto.className} p-[10px]`}>Courses</li>
              <li className={`${roboto.className} p-[10px]`}>Services</li>
              <li className={`${roboto.className} p-[10px]`}>Achievement</li>
              <li className={`${roboto.className} p-[10px]`}>About Us</li>
              <li className={`${roboto.className} p-[10px]`}>Testimonial</li>
            </ul>

            <div className="flex space-x-4 mt-4 sm:mt-0">
              <button className="w-20 h-10 rounded-[5px] border border-black px-[2px] py-[8px]">
                Login
              </button>
              <button className="w-20 h-10 rounded-[5px] bg-black text-white px-3 py-[8px]">
                Sign up
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="max-sm:hidden sm:hidden flex justify-between items-center w-full mt-4">
            <ul className="flex gap-4 w-full justify-between px-4">
              <li className={`${roboto.className} p-[10px]`}>Home</li>
              <li className={`${roboto.className} p-[10px]`}>Courses</li>
              <li className={`${roboto.className} p-[10px]`}>Services</li>
              <li className={`${roboto.className} p-[10px]`}>Achievement</li>
              <li className={`${roboto.className} p-[10px]`}>About Us</li>
              <li className={`${roboto.className} p-[10px]`}>Testimonial</li>
            </ul>

            <div className="flex space-x-4 mt-4 sm:mt-0">
              <button className="w-20 h-10 rounded-[5px] border border-black px-[2px] py-[8px]">
                Login
              </button>
              <button className="w-20 h-10 rounded-[5px] bg-black text-white px-3 py-[8px]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
