import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Logo = () => {
  return (
    <div className="">
      <div className="w-auto h-[228px] bg-[#F7F7F7]  py-[80px] flex justify-between ">
        <div
          className={`${roboto.className} font-bold ml-4 text-[10px] w-[320px] h-[68px] sm:text-[12px] lg:text-[24px] `}
        >
          Trusted by 2000+ companies worldwide
        </div>
        <div className=" py-[8px] bg-[#F7F7F7]  ">
          <Image
            src="/Image/logo/Logos.svg"
            alt="logoImage"
            height={56}
            width={880}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Logo;
