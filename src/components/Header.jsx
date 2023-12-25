import React from "react";
import hero_img from "../assets/images/png/hero_img.png";
import Nav from "./common/Nav";
import { HeroImgIcon } from "./common/Icon";
import dots from "../assets/images/png/hero-img-dots.png"
const Header = () => {
  return (
    <div className="lg:h-screen flex flex-col">
      <Nav />
      <div className="container flex-grow flex justify-center items-center h-full xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3 py-12 lg:py-0">
        <div className="flex items-center flex-wrap justify-center">
          <div className="md:w-7/12">
            <h1 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px]">
              Sumit chouhan: Crafting Exceptional{" "}
              <span className="text-[#C778DD] ff_fira text-[28px] sm:text-[32px]">
                Front-End Experiences.
              </span>
            </h1>
            <p className="ff_fira text-[#ABB2BF] leading-[156%] py-4 mb-1 sm:py-6 lg:max-w-lg lg:pe-5">
              He crafts responsive websiteswhere technologies meet creativity
            </p>
            <button class="group ff_fira  font-medium relative min-h-[40px] sm:min-h-[50px] w-36 sm:w-40  overflow-hidden border border-[#C778DD] bg-transparent text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-[#C778DD] before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-[#C778DD] after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-[#C778DD] before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-[#C778DD] after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Contact me!!
              </span>
            </button>
          </div>
          <div className="md:w-5/12 pt-6 sm:pt-10 md:pt-0">
            <div className="relative z-[1]">
                <img height={84} width={84} className="absolute top-[60%] sm:top-[50%] lg:top-[60%] right-0 sm:h-[60px] h-[50px] w-[50px] sm:w-[60px] lg:h-[84px] lg:w-[84px]" src={dots} alt="dots group" />
              <span className="absolute top-[20%] !z-[-1]">
                <HeroImgIcon />
              </span>
              <img src={hero_img} alt="self-img" />
              <div className="border-white py-1 text-sm md:text-base flex items-center border  w-full px-2 gap-2">
                <span className="!h-5 !w-5 bg-[#C778DD]"></span>
                <p className="ff_fira  text-[#ABB2BF]">
                  Currently working on
                  <span className=" text-white font-semibold"> Portfolio</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
