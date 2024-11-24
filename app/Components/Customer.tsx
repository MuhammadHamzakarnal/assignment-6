import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const Customer = () => {
  return (
    <div>
      <div className=" sm:w-auto md:w-auto sm:h-auto md:h-[803.89px] bg-[#F7F7F7]">
        <div className="w-auto h-[109px]  p-8 ml-8  ">
          <h1
            className={`${roboto.className} font-bold text-[48px] text-black `}
          >
            Customer testimonials
          </h1>
          <p
            className={`${roboto.className} font-normal text-[18px] text-black mt-4 `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-auto h-[417.89px] p-8  mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="w-[362.67px] h-[321.89px]  border border-black p-8 ">
            <Image
              className="p-4"
              src="/Image/Customer/Stars.png"
              alt="stars"
              width={116}
              height={18.89}
            ></Image>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[108px] w-[302px] `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="relative flex mt-8">
              <Image
                src="/Image/Customer/Avatar Image1.jpg"
                alt="team"
                width={56}
                height={56}
              />

              <div className="ml-5">
                <h6
                  className={`${roboto.className} font-semibold text-[16px] w-[111px] h-[24px]  `}
                >
                  James Nduku
                </h6>
                <p
                  className={`${roboto.className} font-normal text-[16px] w-[178px] h-[24px]  `}
                >
                  Software Developer
                </p>
              </div>
            </div>
          </div>
          <div className="w-[362.67px] h-[321.89px]  border border-black p-8">
            <Image
              className="p-4"
              src="/Image/Customer/Stars.png"
              alt="stars"
              width={116}
              height={18.89}
            ></Image>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[108px] w-[302px] `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="relative flex mt-8">
              <Image
                src="/Image/Customer/Avatar Image1.jpg"
                alt="team"
                width={56}
                height={56}
              />

              <div className="ml-5">
                <h6
                  className={`${roboto.className} font-semibold text-[16px] w-auto h-[24px]  `}
                >
                  Erick Kipkemboi
                </h6>
                <p
                  className={`${roboto.className} font-normal text-[16px] w-[178px] h-[24px]  `}
                >
                  Scrum Master
                </p>
              </div>
            </div>
          </div>
          <div className="w-[362.67px] h-[321.89px]  border border-black p-8">
            <Image
              className="p-4"
              src="/Image/Customer/Stars.png"
              alt="stars"
              width={116}
              height={18.89}
            ></Image>
            <p
              className={`${roboto.className} font-normal text-[18px] h-[108px] w-[302px] `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </p>
            <div className="relative flex mt-8">
              <Image
                src="/Image/Customer/Avatar Image3.png"
                alt="team"
                width={56}
                height={56}
              />

              <div className="ml-5">
                <h6
                  className={`${roboto.className} font-semibold text-[16px] w-auto h-[24px]  `}
                >
                  Stephen Kerubo
                </h6>
                <p
                  className={`${roboto.className} font-normal text-[16px] w-[178px] h-[24px]  `}
                >
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1312px] h-[48px] flex justify-between ">
            <div className="w-[72px] h-[8px] flex gap-2">
              <Image
                src="/Image/Customer/Dotb.jpg"
                alt="Dots"
                width={8}
                height={8}
              ></Image>
              <Image
                src="/Image/Customer/Dotw.png"
                alt="Dots"
                width={8}
                height={8}
              ></Image>
              <Image
                src="/Image/Customer/Dotw.png"
                alt="Dots"
                width={8}
                height={8}
              ></Image>

              <Image
                src="/Image/Customer/Dotw.png"
                alt="Dots"
                width={8}
                height={8}
              ></Image>
            </div>
            <div className="flex gap-[15px] mr-16">
              <Image
                src="/Image/Customer/Buttonl.svg"
                alt="sliderButton"
                width={48}
                height={48}
              ></Image>
              <Image
                src="/Image/Customer/Buttonr.svg"
                alt="sliderButton"
                width={48}
                height={48}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
