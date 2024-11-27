import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
import Image from "next/image";
const TeamTwo = () => {
  return (
    <div>
      <div className="w-full md:h-[895px] py-[112px] md:px-[64px] px-16  bg-[#F7F7F7] ">
        <div className=" max-sm:mt-32 max-w-screen-lg mx-auto text-center ">
          <h1
            className={`${roboto.className} font-bold text-[32px] md:text-[48px] text-center`}
          >
            Our team
          </h1>
          <p
            className={`${roboto.className} font-normal text-[18px] md:w-[768px] md:h-[27px] mt-6`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="md:w-auto md:h-[482px] mt-16    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* 1 */}
          <div className="md:w-[394.67px] md:h-[209px] flex flex-col items-center">
            <div className="flex justify-center ">
              <Image
                src="/Image/Teamtwo/Image1.svg"
                alt="Teamimage"
                width={80}
                height={80}
                className= "object-cover"
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <h5 className={`${roboto.className} font-semibold text-[20px] `}>
                James Nduku
              </h5>
              <p className={`${roboto.className} font-normal text-[18px] `}>
                Marketing Coordinator
              </p>
            </div>
            <div className=" flex justify-center mt-8">
              <Image
                src="Image/Teamtwo/Social Icons.svg"
                alt="socialicon"
                width={100}
                height={24}
                className="object-cover"
              ></Image>
            </div>
          </div>
          {/* 2 */}
          <div className="md:w-[394.67px] md:h-[209px] flex flex-col items-center">
            <div className="flex justify-center ">
              <Image
                src="/Image/Teamtwo/Image2.svg"
                alt="Teamimage"
                width={80}
                height={80}
                className="object-cover"
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <h5 className={`${roboto.className} font-semibold text-[20px] `}>
                Joseph Munyambu
              </h5>
              <p className={`${roboto.className} font-normal text-[18px] `}>
                Nursing Assistant
              </p>
            </div>
            <div className=" flex justify-center mt-8">
              <Image
                src="Image/Teamtwo/Social Icons.svg"
                alt="socialicon"
                width={100}
                height={24}
                className="object-cover"
              ></Image>
            </div>
          </div>
          {/* 3 */}
          <div className="md:w-[394.67px] md:h-[209px]  flex flex-col items-center">
            <div className="flex justify-center ">
              <Image
                src="/Image/Teamtwo/Image3.svg"
                alt="Teamimage"
                width={80}
                height={80}
                className="object-cover"
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <h5 className={`${roboto.className} font-semibold text-[20px] `}>
                Joseph Ngumbau
              </h5>
              <p className={`${roboto.className} font-normal text-[18px] `}>
                Medical Assistant
              </p>
            </div>
            <div className=" flex justify-center mt-8">
              <Image
                src="Image/Teamtwo/Social Icons.svg"
                alt="socialicon"
                width={100}
                height={24}
                className="object-cover"
              ></Image>
            </div>
          </div>
          {/* 4 */}
          <div className=" max-sm:hidden w-[394.67px] h-[209px]  gap-6">
            <div className="flex justify-center ">
              <Image
                src="/Image/Teamtwo/Image4.svg"
                alt="Teamimage"
                width={80}
                height={80}
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <h5 className={`${roboto.className} font-semibold text-[20px] `}>
                Erick Kipkemboi
              </h5>
              <p className={`${roboto.className} font-normal text-[18px] `}>
                Web Designer
              </p>
            </div>
            <div className=" flex justify-center mt-8">
              <Image
                src="Image/Teamtwo/Social Icons.svg"
                alt="socialicon"
                width={100}
                height={24}
              ></Image>
            </div>
          </div>
          {/* 5 */}
          <div className="max-sm:hidden w-[394.67px] h-[209px]  gap-6">
            <div className="flex justify-center ">
              <Image
                src="/Image/Teamtwo/Image5.svg"
                alt="Teamimage"
                width={80}
                height={80}
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <h5 className={`${roboto.className} font-semibold text-[20px] `}>
                Stephen Kerubo
              </h5>
              <p className={`${roboto.className} font-normal text-[18px] `}>
                President of Sales
              </p>
            </div>
            <div className=" flex justify-center mt-8">
              <Image
                src="Image/Teamtwo/Social Icons.svg"
                alt="socialicon"
                width={100}
                height={24}
              ></Image>
            </div>
          </div>
          {/* 6 */}
          <div className="max-sm:hidden w-[394.67px] h-[209px] gap-6">
            <div className="flex justify-center ">
              <Image
                src="/Image/Teamtwo/Image6.svg"
                alt="Teamimage"
                width={80}
                height={80}
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 ">
              <h5 className={`${roboto.className} font-semibold text-[20px] `}>
                John Leboo
              </h5>
              <p className={`${roboto.className} font-normal text-[18px] `}>
                Dog Trainer
              </p>
            </div>
            <div className=" flex justify-center mt-8">
              <Image
                src="Image/Teamtwo/Social Icons.svg"
                alt="socialicon"
                width={100}
                height={24}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTwo;
