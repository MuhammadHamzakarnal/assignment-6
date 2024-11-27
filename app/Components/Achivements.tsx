import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const Achivements = () => {
  return (
    <div>
      <div className="w-auto h-auto lg:h-[488px] py-[112px] px-[64px] sm:py-[112px] md:px-[64px] mt-16">
        <div className=" h-auto w-auto lg:h-[136px] lg:w-[1152px]  flex flex-col items-center justify-evenly text-center">
          <h1 className={`${roboto.className} font-bold text-4xl lg:text-5xl `}>
            Our Achievements
          </h1>

          <p
            className={`${roboto.className} mt-5  font-normal max-sm-text-[14px] text-[18px] sm:text-x  text-center lg:mt-6  `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className=" md:mt-10 mt-8 ">
          <Image
            src="/Image/logo/logo.svg"
            alt="image"
            width={1152}
            height={96}
            className="max-w-full"
          ></Image>
        </div>
      </div>

      <div className="w-auto h-auto lg:h-[488px] py-[112px] px-[64px] sm:py-[112px] md:px-[64px] mt-16">
        <div className=" h-auto w-auto lg:h-[136px] lg:w-[1152px]  flex flex-col items-center justify-evenly text-center">
          <h1 className={`${roboto.className} font-bold text-4xl lg:text-5xl `}>
            Our Achievements
          </h1>

          <p
            className={`${roboto.className} mt-5 font-normal max-sm-text-[14px] text-[18px] sm:text-x  text-center lg:mt-6  `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className=" md:mt-10 mt-8 ">
          <Image
            src="/Image/logo/logo.svg"
            alt="image"
            width={1152}
            height={96}
            className="max-w-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
