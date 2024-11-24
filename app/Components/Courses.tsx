import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Courses = () => {
  return (
    <div>
      <div className="h-[1742px] w-auto  ">
        <div className="h-[118px] w-[768px] flex flex-col items-center justify-evenly mx-auto">
          <h1
            className={`${roboto.className} font-bold text-[56px] text-black w-[768px] text-center`}
          >
            Courses
          </h1>
          <p
            className={`${roboto.className} font-normal text-[18px] text-center w-[768px] h-[27px]`}
          >
            Your Ultimate Guide to learning
          </p>
        </div>
        <div>
          {" "}
          <ul className="flex justify-center m-10">
            <li
              className={`${roboto.className} ml-5 text-black font-normal text-[16px] border-black border-b `}
            >
              Popular
            </li>
            <li
              className={`${roboto.className} ml-5 text-black font-normal text-[16px]`}
            >
              Recommended
            </li>
            <li
              className={`${roboto.className} ml-5 text-black font-normal text-[16px]`}
            >
              Best Price
            </li>
          </ul>
        </div>

        <div className="h-[1340px] w-[1335px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 mx-0 ">
          {/* 1 */}
          <div className="w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7]   ">
            <Image
              src="/Image/Courses/Image1.svg"
              alt="blog image"
              width={416}
              height={300}
            ></Image>
            <div className="h-24px w-[382px] gap-2 flex justify-between">
              <h6 className={`${roboto.className} font-semibold text-[14px]`}>
                Design
              </h6>
              <Image
                src="/Image/Courses/Star.png"
                alt="star"
                width={48}
                height={24}
              ></Image>
            </div>

            <h1
              className={`${roboto.className} w-[382px] h-[34px] font-bold text-[24px] text-black py-2`}
            >
              UX/UI Design 201
            </h1>

            <p
              className={`${roboto.className} font-normal text-[16px] w-[382px] h-[48px] py-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-8">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-[8px] px-[20px]`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[24px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image2.svg"
              alt="blog image"
              width={416}
              height={300}
            ></Image>
            <div className="h-24px w-[382px] gap-2 flex justify-between">
              <h6
                className={`${roboto.className} font-semibold text-[14px] pl-4`}
              >
                Business
              </h6>
              <Image
                src="/Image/Courses/Star.png"
                alt="star"
                width={48}
                height={24}
              ></Image>
            </div>

            <h1
              className={`${roboto.className} w-[382px] h-[34px] font-bold text-[24px] text-black py-2 pl-4`}
            >
              Data Analysis for Beginners
            </h1>

            <p
              className={`${roboto.className} font-normal text-[16px] w-[382px] h-[48px] py-3 ml-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex  py-8">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-[8px] px-[20px] ml-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[24px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image3.svg"
              alt="blog image"
              width={416}
              height={300}
            ></Image>
            <div className="h-24px w-[382px] gap-2 flex justify-between">
              <h6
                className={`${roboto.className} font-semibold text-[14px] ml-4`}
              >
                Business
              </h6>
              <Image
                src="/Image/Courses/Star.png"
                alt="star"
                width={48}
                height={24}
              ></Image>
            </div>

            <h1
              className={`${roboto.className} w-[382px] h-[34px] font-bold text-[24px] text-black py-2 ml-4`}
            >
              Data Analysis for Beginners
            </h1>

            <p
              className={`${roboto.className} font-normal text-[16px] w-[382px] h-[48px] py-3 ml-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-8">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-[8x] px-[20p] ml-4 `}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[24px] py-[8px] rounded-[5px] `}
              >
                $400
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image4.png"
              alt="blog image"
              width={416}
              height={300}
            ></Image>
            <div className="h-24px w-[382px] gap-2 flex justify-between">
              <h6 className={`${roboto.className} font-semibold text-[14px]`}>
                Art
              </h6>
              <Image
                src="/Image/Courses/Star.png"
                alt="star"
                width={48}
                height={24}
              ></Image>
            </div>

            <h1
              className={`${roboto.className} w-[382px] h-[34px] font-bold text-[24px] text-black py-2`}
            >
              Art Specialization
            </h1>

            <p
              className={`${roboto.className} font-normal text-[16px] w-[382px] h-[48px] py-3`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-8">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-[8px] px-[20px]`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[24px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image5.svg"
              alt="blog image"
              width={416}
              height={300}
            ></Image>
            <div className="h-24px w-[382px] gap-2 flex justify-between">
              <h6
                className={`${roboto.className} font-semibold text-[14px] pl-4`}
              >
                Law
              </h6>
              <Image
                src="/Image/Courses/Star.png"
                alt="star"
                width={48}
                height={24}
              ></Image>
            </div>

            <h1
              className={`${roboto.className} w-[382px] h-[34px] font-bold text-[24px] text-black py-2 p-4`}
            >
              Rule of Law
            </h1>

            <p
              className={`${roboto.className} font-normal text-[16px] w-[382px] h-[48px] py-3 ml-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-8">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-[8px] px-[20px] ml-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[24px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 6 */}

          <div className="w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image6.png"
              alt="blog image"
              width={416}
              height={300}
            ></Image>
            <div className="h-24px w-[382px] gap-2 flex justify-between">
              <h6
                className={`${roboto.className} font-semibold text-[14px] ml-4`}
              >
                Tech
              </h6>
              <Image
                src="/Image/Courses/Star.png"
                alt="star"
                width={48}
                height={24}
              ></Image>
            </div>

            <h1
              className={`${roboto.className} w-[382px] h-[34px] font-bold text-[24px] text-black py-2 ml-4`}
            >
              Introduction to webflow
            </h1>

            <p
              className={`${roboto.className} font-normal text-[16px] w-[382px] h-[48px] py-3 ml-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-8 ml-4">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-[8px] px-[20px]`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[24px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-center ">
          <button
            className={`${roboto.className} w-[170px] h-[48px] text-[16px] font-normal rounded-[5px] border border-black py-[12px] px-[24px]`}
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
