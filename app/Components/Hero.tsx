import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Hero = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className=" w-[640px] h-[300px] mt-64 ml-20 ]">
          <h1
            className={`${roboto.className} font-bold text-[56px] w-[500px] h-[134px]`}
          >
            Learn new skills online with ease
          </h1>
          <p
            className={`${roboto.className}  mt-14 font-normal text-[18px] w-[500px] h-[54px]`}
          >
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div>
            <button
              className={`${roboto.className} text-[16px] font-normal w-auto h-auto rounded-[5px] border px-[24px] py-[12px] text-white bg-black mt-7 `}
            >
              Start learning now
            </button>
            <button
              className={`${roboto.className} text-[16px] font-normal w-auto h-auto rounded-[5px] border px-[24px] py-[12px] border-black ml-4`}
            >
              Explore Courses
            </button>
          </div>
        </div>
        <div className=" h-[900]">
          {" "}
          <Image
            src="/Image/heroimage.jpg"
            alt="Hero Image"
            width={640}
            height={900}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
