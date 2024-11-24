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
      <div className="h-[54px] bg-[#F7F7F7] px-4 sm:px-[62px] flex justify-between items-center border-b-2 border-black">
        <div className="flex flex-wrap items-center">
          <p
            className={`${roboto.className} font-normal text-[14px] text-black`}
          >
            Phone Number: 956 742 455 678
          </p>
          <span className="mx-2">
            {" "}
            <Image
              src="/Image/Line 3.png"
              alt="line"
              width={1}
              height={1}
            ></Image>
          </span>
          <p
            className={`${roboto.className} font-normal text-[14px] text-black`}
          >
            Email:
            <span
              className={`${roboto.className} font-normal text-[14px] text-black`}
            >
              info@ddsgnr.com
            </span>
          </p>
        </div>
        <div className="flex space-x-4 justify-end ml-2 sm:ml-0">
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

      <nav className="mt-5 h-[72px] bg-[#F7F7F7] px-4 sm:px-[64px] border-b border-[#676767]">
        <div className="flex w-full h-[44px] pt-[18px] items-center justify-between">
          <div>
            <Image
              src="/Image/Ddsgnr Library.png"
              alt="logo"
              width={130.6}
              height={30.38}
            />
          </div>

          <div className="flex flex-wrap md:w-[910px] sm:w-auto justify-between items-center bg-white  ">
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
