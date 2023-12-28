import React from "react";
import { LogoIcon } from "./common/Icon";
import { Link } from "react-router-dom";
import linkden from "../components/assets/images/svg/bi_linkedin.svg";
import discord from "../components/assets/images/svg/Discord-icon.svg";
import whatApp from "../components/assets/images/svg/whatsapp-icon.svg";
const Footer = () => {
  const getNewYear = new Date().getFullYear();
  return (
    <div className=" border-t-2 border-[#ABB2BF]">
      <div className=" my-8 px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto">
        <div className=" flex flex-wrap">
          <div className=" w-6/12">
            <Link
              to="/"
              className="ff_fira text-white font-bold flex items-center gap-2"
            >
              <LogoIcon />Sumit-Chouhan
            </Link>
            <p className="text-[16px] ff_fira text-white mt-4">
              {" "}
              front-end developer
            </p>
          </div>
          <div className="w-6/12">
            <div className=" flex float-end ">
              <div>
                <p className="font-medium text-white text-lg sm:text-xl md:text-2xl ff_fira ">
                  Media
                </p>

                <div className="flex items-center mt-4">
                  <a href="#">
                    <img src={discord} alt="discord" />
                  </a>

                  <a href="https://web.whatsapp.com/" className=" mx-3">
                    <img src={whatApp} alt="whatApp" />
                  </a>
                  <a href="www.linkedin.com/in/sumit-chauhan-a40946242" target="blank">
                    <img src={linkden} alt="linkden" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[16px] ff_fira text-[#ABB2BF] text-center mt-9 md:mt-12">
          © Copyright {getNewYear} Made by Sumit Chouhan
        </p>
      </div>
    </div>
  );
};

export default Footer;
