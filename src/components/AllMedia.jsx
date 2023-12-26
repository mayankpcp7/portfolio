import React from "react";
import wahtApp from "../components/assets/images/svg/whatsapp-icon.svg";
import emailIcon from "../components/assets/images/svg/Email-icon.svg";
import twitter from "../components/assets/images/svg/Twitter.svg";
import hlafBox from "../components/assets/images/svg/box.svg";
import dotsC from "../components/assets/images/svg/dots-c.svg";

const AllMedia = () => {
  return (
    <div className=" mt-10 md:mt-14 my-12 md:mb-20 relative">
      <img
        src={dotsC}
        alt="dotsC"
        className=" absolute  top-[45%] hidden xl:inline-block"
      />
      <img
        src={hlafBox}
        alt="hlafBox"
        className=" absolute right-0 top-[35%] hidden xl:inline-block"
      />
      <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px] ">
          <span className=" text-[#C778DD]">/</span>contacts
        </h2>
        <p className=" ff_fira text-[16px] text-white mt-4">Who am i? </p>

        <div className="flex flex-wrap mt-4 md:mt-12">
          <div className=" lg:w-6/12">
            <p className=" ff_fira text-[16px] text-[#ABB2BF] max-w-[505px]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className=" lg:w-6/12 mt-4 md:mt-9 lg:mt-0">
            <div className=" sm:flex justify-end">
              <div className="border border-[#ABB2BF] p-4 sm:h-[85px]">
                <p className=" font-medium text-[16px] ff_fira text-white">
                  Support me here
                </p>
                <a
                  href="tel:+9053730515"
                  className=" ff_fira text-[16px] text-[#ABB2BF]"
                >
                  (+91) 9053730515
                </a>
              </div>
              <div className=" border border-[#ABB2BF] p-4 mt-3 sm:mt-0  sm:ms-3">
                <p className="text-[16px] ff_fira font-semibold text-white">
                  Message me here
                </p>
                <div className=" mt-4">
                  <a href="tel:+9053730515" className=" flex items-center">
                    <img src={wahtApp} alt="wahtApp" />
                    <span className="text-[16px] ff_fira text-[#ABB2BF] inline-block ms-2">
                      (+91)9053730515
                    </span>
                  </a>
                </div>
                <div className=" mt-2">
                  <a
                    href="mailto:vermakp39@gmail.com"
                    className=" flex items-center"
                  >
                    <img src={emailIcon} alt="emailIcon" />
                    <span className="text-[16px] ff_fira text-[#ABB2BF] inline-block ms-2">
                      vermakp39@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="ff_fira font-semibold text-white text-[22px] sm:text-3xl md:text-[32px] mt-9 lg:mt-16">
          <span className=" text-[#C778DD]">#</span>my-projects
        </h2>
        <div className=" flex items-center mt-6">
          <a href="" className=" flex items-center">
            <img src={twitter} alt="twitter" />
            <span className=" ms-1 ff_fira text-[16px] text-[#ABB2BF]">
              @kapil
            </span>
          </a>
          <a href="" className=" flex items-center ms-5">
            <img src={twitter} alt="twitter" />
            <span className=" ms-1 ff_fira text-[16px] text-[#ABB2BF]">
              @kapil
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllMedia;