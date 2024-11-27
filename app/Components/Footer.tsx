import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="md:h-[524px] md:w-[1120px]  px-4 py-12 sm:px-6 lg:px-8 bg-white mx-auto">
        <div className="md:w-[1120px] md:h-[82px]  flex  flex-col  md:flex-row justify-between mb-16 ">
          <div className=" md:h-[51px] md:w-[500px] mb-8 sm:mb-0 ">
            <h2
              className={`${roboto.className} max-sm:text-center mb-3 md:w-[500px] md:h-[27px]  font-semibold text-[18px] text-black `}
            >
              Subscribe to our newsletter
            </h2>
            <p
              className={`${roboto.className} max-sm:text-center md:h-[24px] md:w-[500px] w-auto font-normal text-[14px] md:text-[16px]  `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="md:w-[400px] h-[82px] ">
              <input
                type="text"
                name="name"
                placeholder="Enter your email"
                className={`${roboto.className} font-normal text-base rounded-[5px] w-[265px] h-[48px] border border-black p-3 gap-2 bg-[#FFFFFF]`}
              />
              <button
                className={`${roboto.className} md:ml-3 text-[16px] font-normal w-auto h-auto rounded-[5px] border px-[24px] py-[12px] border-black mt-2 `}
              >
                Subscribe
              </button>
            </div>
            <p
              className={`${roboto.className} w-auto md:w-[400px] md:h-[18px] font-normal text-xs sm:mt-0 mt-10`}
            >
              By subscribing you agree to with our
              <span
                className={`${roboto.className} font-normal text-xs underline ml-2`}
              >
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 mb-14 ">
          <div className="w-full sm:w-[250px] max-sm:flex max-sm:justify-center max-sm:items-center ">
            <Image
              src="/Image/Ddsgnr.svg"
              alt="logo"
              width={130}
              height={40}
              className="max-sm:w-[172px] max-sm:h-[40px]"
            ></Image>
          </div>
          {/* 1 */}
          <div className="flex flex-wrap sm:flex-nowrap justify-between gap-8 sm:gap-0">
            <div className="w-full sm:w-[250px] max-sm:text-center">
              <h5
                className={`${roboto.className}  font-semibold text-base text-black`}
              >
                Courses
              </h5>
              <div>
                <p className="font-normal text-[14px] py-2">Business</p>
                <p className="font-normal text-[14px] py-2">Development</p>
                <p className="font-normal text-[14px] py-2">Technology</p>
                <p className="font-normal text-[14px] py-2">Design</p>
                <p className="font-normal text-[14px] py-2">Programming</p>
              </div>
            </div>

            {/* 2 */}
            <div className="w-full sm:w-[250px] max-sm:text-center">
              <h5
                className={`${roboto.className} font-semibold text-base text-black`}
              >
                Resources
              </h5>
              <div>
                <p className="font-normal text-[14px] py-2">Career</p>
                <p className="font-normal text-[14px] py-2">Resume</p>
                <p className="font-normal text-[14px] py-2">Learning</p>
                <p className="font-normal text-[14px] py-2">
                  Interview Preparation
                </p>
                <p className="font-normal text-[14px] py-2">Jobs</p>
              </div>
            </div>
            {/* 3 */}

            <div className="w-full sm:w-[250px] max-sm:text-center">
              <h5
                className={`${roboto.className} font-semibold text-base text-black`}
              >
                About Us
              </h5>
              <div>
                <p className="font-normal text-[14px] py-2">Contact</p>
                <p className="font-normal text-[14px] py-2">Help/Support</p>
                <p className="font-normal text-[14px] py-2">FAQ</p>
                <p className="font-normal text-[14px] py-2">
                  Terms and Conditions
                </p>
                <p className="font-normal text-[14px] py-2">Partners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-sm:flex-col justify-between  border-t border-black pt-6">
          <div className="  sm:flex w-[304px]  sm:w-[564px] text-center sm:text-left">
            <p
              className={`${roboto.className} font-normal text-[14px] text-black mb-2 sm:mb-0`}
            >
              2023 Ddsgnr. All rights reserved.
            </p>
            <div className="flex justify-center sm:ml-2 gap- ">
              <p
                className={`${roboto.className} font-normal sm:text-[14px] text-[12px] underline ml-2`}
              >
                Privacy Policy
              </p>
              <p
                className={`${roboto.className} font-normal sm:text-[14px] text-[12px] underline ml-2`}
              >
                Terms of Service
              </p>
              <p
                className={`${roboto.className} font-normal sm:text-[14px] text-[12px] underline ml-2`}
              >
                Cookies Settings
              </p>
            </div>
          </div>

          <div className=" flex  max-sm:justify-center max-sm:mt-8 gap-4 text-black">
            <FaFacebookSquare />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
