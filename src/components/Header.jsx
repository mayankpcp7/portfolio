import React from "react";
import hero_img from "../assets/images/png/hero_img.png";
import Nav from "./common/Nav";
import { HeroImgIcon } from "./common/Icon";
const Header = () => {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="container flex-grow flex justify-center items-center h-full xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto px-3">
        <div className="flex">
          <div className="w-7/12">
            <h1 className="ff_fira font-semibold text-white text-[28px] sm:text-[32px]">
              "Sumit chouhan: Crafting Exceptional{" "}
              <span className="text-[#C778DD] ff_fira text-[28px] sm:text-[32px]">
                Front-End Experiences"
              </span>
            </h1>
            <p className="ff_fira text-[#ABB2BF] leading-[156%] py-6">
              He crafts responsive websiteswhere technologies meet creativity
            </p>
            <button className="ff_fira font-medium border-[#C778DD] border px-4 py-2 text-white">
              Contact me!!
            </button>
          </div>
          <div className="w-5/12">
            <div className="relative">
              <span className="absolute top-[20%] !z-[-1]">
                <HeroImgIcon />
              </span>
              <p className=" border border-white py-1 absolute bottom-[-9%] w-[98%]">
                <span className="!h-2 !w-2 bg-[#C778DD]"></span>
                Currently working on Portfolio
              </p>
              <img src={hero_img} alt="self-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
