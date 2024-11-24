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
      <div className="w-auto h-[488px] py-[112px] px-[64px] mt-16  ">
        <div className="  h-[136px] w-[1152px]  flex flex-col items-center justify-evenly ">
          <h1 className={`${roboto.className} font-bold text-5xl `}>
            Our Achievements
          </h1>

          <p
            className={`${roboto.className} font-normal text-[18px]  text-center  `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className=" mt-10 ">
          <Image
            src="/Image/logo/logo.svg"
            alt="image"
            width={1152}
            height={96}
          ></Image>
        </div>
      </div>

      <div className="w-auto h-[488px] py-[112px] px-[64px] mt-14">
        <div className="  h-[136px] w-[1152px]  flex flex-col items-center justify-evenly ">
          <h1 className={`${roboto.className} font-bold text-5xl `}>
            Our Achievements
          </h1>

          <p
            className={`${roboto.className} font-normal text-[18px]  text-center  `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className=" mt-10 ">
          <Image
            src="/Image/logo/logo.svg"
            alt="image"
            width={1152}
            height={96}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
