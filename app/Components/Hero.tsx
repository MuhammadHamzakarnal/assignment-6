import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between ">
      <div className="w-full lg:w-[500px] mt-16  lg:mt-64 lg:ml-20">
        <h1
          className={`${roboto.className} font-bold text-[32px] sm:text-[48px] lg:text-[56px] w-full`}
        >
          Learn new skills online with ease
        </h1>
        <p
          className={`${roboto.className} mt-6 text-[16px] lg:text-[18px] w-full lg:w-[500px]`}
        >
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="flex flex-col sm:flex-row mt-7">
          <button
            className={`${roboto.className} text-[16px] font-normal w-auto h-auto rounded-[5px] border px-[24px] py-[12px] text-white bg-black mb-4 sm:mb-0 `}
          >
            Start learning now
          </button>
          <button
            className={`${roboto.className} text-[16px] font-normal w-auto h-auto rounded-[5px] border px-[24px] py-[12px] border-black`}
          >
            Explore Courses
          </button>
        </div>
      </div>

      <div className="w-full lg:w-[640px] h-auto mt-8 lg:mt-0 ">
        <Image
          src="/Image/heroimage.jpg"
          alt="Hero Image"
          width={640}
          height={900}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
