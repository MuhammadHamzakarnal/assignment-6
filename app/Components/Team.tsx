import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Team = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8   ">
        <h1
          className={`${roboto.className} font-bold text-[20px] text-center  lg:text-[48px] text-black lg:w-[768px]  mt:8 lg:mt-16 `}
        >
          Explore Courses By Category
        </h1>
        <p
          className={`${roboto.className} max-sm:mx-2 font-normal lg:text-[18px] text-[11px] text-center text-black h-[27px] w-auto  sm:w-auto lg:w-[768px] mt-5`}
        >
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[60px] max-sm:mt-5 mt-10 w-auto lg:w-[1335px] h-auto lg:h-[636px] mx-auto">
        {/* 1 */}
        <div className=" w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px] `}
            >
              Design & Development
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame1.svg"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Marketing
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame2.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Development
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="max-sm:hidden w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame3.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Communication
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="max-sm:hidden w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame4.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Digital Marketing
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="max-sm:hidden w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame5.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-6">
            <h1
              className={`${roboto.className} font-normal text-[18px]`}
            >
              Self Development
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 7 */}
        <div className="max-sm:hidden w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame6.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Business
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] `}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 8 */}
        <div className="max-sm:hidden w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame7.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Finance
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="max-sm:hidden w-auto lg:w-[410.67px] h-auto lg:h-[132px] bg-[#F7F7F7] lg:p-4 p-2 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame7.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-semibold text-[20px]`}
            >
              Consulting
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          className={`${roboto.className} lg:w-[170px] lg:h-[48px] text-[16px] font-normal rounded-[5px] border border-black py-[6px] px-[12px] lg:py-[12px] lg:px-[24px]`}
        >
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Team;
