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
      <div className="flex flex-col items-center justify-center mt-8  ">
        <h1
          className={`${roboto.className} font-bold text-[48px] text-black w-[768px] mt-16`}
        >
          Explore Courses By Category
        </h1>
        <p
          className={`${roboto.className} font-normal text-[18px] text-black h-[27px] sm:w-auto md:w-[768px] mt-5`}
        >
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-[60px] mt-10 w-[1335px] h-[636px] mx-auto">
        {/* 1 */}
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Design & Development
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame1.svg"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Marketing
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame2.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Development
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame3.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Communication
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame4.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Digital Marketing
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className=" w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame5.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-6">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
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
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame6.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Business
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>

        {/* 8 */}
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame7.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600px] text-[20px] h-[30px] w-[246.67px]`}
            >
              Finance
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>
        <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] p-4 flex items-center rounded-[5px]">
          <Image
            src="/Image/team/Frame7.png"
            alt="frame"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1
              className={`${roboto.className} font-[600] text-[20px] h-[30px] w-[246.67px]`}
            >
              Consulting
            </h1>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[27px] w-[246.67px]`}
            >
              50+ Courses Available
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          className={`${roboto.className} w-[170px] h-[48px] text-[16px] font-normal rounded-[5px] border border-black py-[12px] px-[24px]`}
        >
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Team;