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
      <div className="h-[524px] w-[1120px]  gap-20 bg-white mx-auto">
        <div className="w-[1120px] h-[82px]  flex justify-between mt-20 ">
          <div className="h-[51px] w-[500px] ">
            <h2
              className={`${roboto.className} mb-3 w-[500px] h-[27px]  font-semibold text-[18px] text-black `}
            >
              Subscribe to our newsletter
            </h2>
            <p
              className={`${roboto.className} h-[24px] w-[500px]  font-normal text-[16px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <div className="w-[400px] h-[82px] ">
              <input
                type="text"
                name="name"
                placeholder="Enter your email"
                className={`${roboto.className} font-normal text-base rounded-[5px] w-[265px] h-[48px] border border-black p-3 gap-2 bg-[#FFFFFF]`}
              />
              <button
                className={`${roboto.className} ml-3 font-normal text-base rounded-[5px] border border-black py-3 px-4 w-auto h-auto bg-[#FFFFFF] `}
              >
                Subscribe
              </button>
            </div>
            <p
              className={`${roboto.className} w-[400px] h-[18px] font-normal text-xs`}
            >
              By subscribing you agree to with our{" "}
              <span
                className={`${roboto.className} font-normal text-xs underline `}
              >
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
        <div className="w-[1120px] h-[225px] gap-[40px] flex mt-20 ">
          <div>
            <Image
              src="/Image/Ddsgnr.svg"
              alt="logo"
              width={250}
              height={40}
            ></Image>
          </div>
          <div className="w-[250px] h-[225px] gap-4 mt-4 ml-5 ">
            <h5
              className={`${roboto.className} w-[250px] h-[24px] font-semibold text-base text-black`}
            >
              Courses
            </h5>

            <div className="w-[250px] h-[185px] ">
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Business
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Development
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Technology
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Design
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Programming
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[225px] gap-4 mt-4 ml-5 ">
            <h5
              className={`${roboto.className} w-[250px] h-[24px] font-semibold text-base text-black`}
            >
              Resources
            </h5>

            <div className="w-[250px] h-[185px] ">
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Career
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Resume
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Learning
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Interview Preparation
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Jobs
              </p>
            </div>
          </div>
          <div className="w-[250px] h-[225px] gap-4 mt-4 ml-5 ">
            <h5
              className={`${roboto.className} w-[250px] h-[24px] font-semibold text-base text-black`}
            >
              About Us
            </h5>

            <div className="w-[250px] h-[185px]">
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Contact
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Help/Support
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                FAQ
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Terms and Conditions
              </p>
              <p
                className={`${roboto.className} w-[250px] h-[37px] py-2 font-normal text-[14]`}
              >
                Partners
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-[1120px] h-[57px] gap-8  border-black border-t mx-auto ">
          <div className="w-[1120px] h-[24px]  flex justify-between mt-5 ">
            <div
              className={`${roboto.className} w-[564px] h-[21px] gap-6 font-normal text-[14px] text-black  flex`}
            >
              <p>2023 Ddsgnr. All right reserved.</p>
              <p className="underline">Privacy Policy</p>
              <p className="underline">Terms of Service</p>
              <p className="underline">Cookies Settings</p>
            </div>
            <div className="flex gap-3">
              <FaFacebookSquare />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
