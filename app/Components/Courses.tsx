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
        <div className="lg:h-[118px] w-auto h-auto flex flex-col items-center justify-evenly mx-auto px-4">
          <h1
            className={`${roboto.className} font-bold text-[28px] md:text-[56px] text-black lg:w-[768px] text-center`}
          >
            Courses
          </h1>
          <p
            className={`${roboto.className} font-normal text-[16px] text-center w-full max-w-[768px] `}
          >
            Your Ultimate Guide to learning
          </p>
        </div>
        <div>
          <ul className="flex   sm:flex-row justify-center sm:space-x-6 m-10 text-center sm:text-left">
            <li
              className={`${roboto.className} ml-3  text-black font-normal text-[16px]   border-black max-sm:border-b lg:border-b `}
            >
              Popular
            </li>
            <li
              className={`${roboto.className} ml-3 text-black font-normal text-[16px]`}
            >
              Recommended
            </li>
            <li
              className={`${roboto.className} ml-3 text-black font-normal text-[16px]`}
            >
              Best Price
            </li>
          </ul>
        </div>

        <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 ">
          {/* 1 */}
          <div className="w-full max-w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7]   ">
            <Image
              src="/Image/Courses/Image1.svg"
              alt="blog image"
              width={416}
              height={300}
              className="w-full h-[200px] object-cover"
            ></Image>
            <div className="h-24px w-full p-4 flex justify-between">
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
              className={`${roboto.className}  font-bold md:text-[24px] text-[18px] text-black px-2 py-2`}
            >
              UX/UI Design 201
            </h1>

            <p
              className={`${roboto.className} font-normal md:text-[16px] text-sm  py-3 px-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-4 px-4">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-2 :px-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[20px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className=" w-full max-w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7]  ">
            <Image
              src="/Image/Courses/Image2.svg"
              alt="blog image"
              width={416}
              height={300}
              className="w-full h-[200px] object-cover"
            ></Image>
            <div className="h-24px w-full p-4 flex justify-between">
              <h6 className={`${roboto.className} font-semibold text-[14px]`}>
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
              className={`${roboto.className}font-bold md:text-[24px] text-[18px] text-black px-2 py-2`}
            >
              Data Analysis for Beginners
            </h1>

            <p
              className={`${roboto.className} font-normal md:text-[16px] text-sm  py-3 px-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-4 px-4">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-2 :px-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className}  font-medium text-[16px] w-[77px] h-[40px] px-[20px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full max-w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image3.svg"
              alt="blog image"
              width={416}
              height={300}
              className="w-full h-[200px] object-cover"
            ></Image>
            <div className="h-24px w-full p-4 flex justify-between">
              <h6 className={`${roboto.className} font-semibold text-[14px] `}>
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
              className={`${roboto.className} font-bold md:text-[24px] text-[18px] text-black px-2 py-2`}
            >
              Data Analysis for Beginners
            </h1>

            <p
              className={`${roboto.className}font-normal md:text-[16px] text-sm  py-3 px-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-4 px-4">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-2 :px-4 `}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className} font-medium text-[16px] w-[77px] h-[40px] px-[20px] py-[8px] rounded-[5px] `}
              >
                $400
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="max-sm:hidden w-full max-w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7]  ">
            <Image
              src="/Image/Courses/Image4.png"
              alt="blog image"
              width={416}
              height={300}
              className="w-full h-[200px] object-cover"
            ></Image>
            <div className="h-24px w-full p-4 flex justify-between">
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
              className={`${roboto.className}font-bold md:text-[24px] text-[18px] text-black px-2 py-2`}
            >
              Art Specialization
            </h1>

            <p
              className={`${roboto.className} font-normal md:text-[16px] text-sm  py-3 px-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-4 px-4">
              <button
                className={`${roboto.className}font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-2 :px-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className}  font-medium text-[16px] w-[77px] h-[40px] px-[20px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="max-sm:hidden w-full max-w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image5.svg"
              alt="blog image"
              width={416}
              height={300}
              className="w-full h-[200px] object-cover"
            ></Image>
            <div className="h-24px w-full p-4 flex justify-between">
              <h6 className={`${roboto.className} font-semibold text-[14px] `}>
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
              className={`${roboto.className} font-bold md:text-[24px] text-[18px] text-black px-2 py-2`}
            >
              Rule of Law
            </h1>

            <p
              className={`${roboto.className}font-normal md:text-[16px] text-sm  py-3 px-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-4 px-4">
              <button
                className={`${roboto.className}font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-2 :px-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className}  font-medium text-[16px] w-[77px] h-[40px] px-[20px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
          {/* 6 */}

          <div className="max-sm:hidden w-full max-w-[416px] h-[534px] rounded-[5px] bg-[#F7F7F7] ">
            <Image
              src="/Image/Courses/Image6.png"
              alt="blog image"
              width={416}
              height={300}
              className="w-full h-[200px] object-cover"
            ></Image>
            <div className="h-24px w-full p-4 flex justify-between">
              <h6 className={`${roboto.className} font-semibold text-[14px] `}>
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
              className={`${roboto.className} font-bold md:text-[24px] text-[18px] text-black px-2 py-2`}
            >
              Introduction to webflow
            </h1>

            <p
              className={`${roboto.className}font-normal md:text-[16px] text-sm  py-3 px-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>

            <div className="flex gap-8 py-4 px-4">
              <button
                className={`${roboto.className} font-normal text-[16px] w-[120px] h-[40px] rounded-[5px] border border-black py-2 :px-4`}
              >
                Enroll Now
              </button>
              <p
                className={`${roboto.className}  font-medium text-[16px] w-[77px] h-[40px] px-[20px] py-[8px] rounded-[5px]`}
              >
                $400
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  flex justify-center mt-8 ">
          <button
            className={`${roboto.className} text-[16px] font-normal rounded-[5px] border border-black py-3 px-6`}
          >
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
