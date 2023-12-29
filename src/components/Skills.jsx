import React from "react";
import dotBox from "../assets/images/png/dot_box.png";
const Skills = () => {
  return (
    
      <div className="px-3 container xl:max-w-[1100px] 3xl:max-w-[1140px] mx-auto pt-12 lg:pt-[106px]">
          <h2 className="text-white font-medium ff_fira text-[22px] sm:text-3xl md:text-[32px] sm:text-[32px] relative skills_line pb-6">
            <span className="text-[#C778DD]">#</span>skills
          </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-5/12 px-3 mt-9 hidden lg:block">
            <img 
              src={dotBox}
              alt="dotBox"
              className="ms-6 max-w-[350px] min-h-[283px] w-full"
            />
          </div>
          <div className="w-full lg:w-7/12 px-2">
            <div className="mx-auto max-w-[375px] sm:max-w-[100%] sm:flex justify-between">
              {/* ==================BOX=1=================*/}

              <div className="border border-[#ABB2BF] group sm:w-[148px] h-[110px] hover:bg-[#959b9b6c] transition-all duration-300">
                <h3 className="text-[16px] py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                  Languages
                </h3>
                <div className="px-3 py-2">
                  <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                    TypeScript
                  </p>
                  <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                    JavaScript
                  </p>
                </div>
              </div>
              {/* ==================BOX=2=================*/}
              <div>
                <div className="border border-[#ABB2BF] group hover:bg-[#959b9b6c] transition-all duration-300 mt-4 sm:mt-0 h-[110px]">
                  <h3 className="text-[16px] py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                    Other
                  </h3>
                  <div className="px-3 py-2">
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                      HTML CSS
                    </p>
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">SCSS</p>
                  </div>
                </div>
                <div className="border border-[#ABB2BF] mt-4 h-[110px] hover:bg-[#959b9b6c] transition-all group duration-300">
                  <h3 className="text-[16px] py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                    Frameworks
                  </h3>
                  <div className="px-3 py-2">
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                      React Next.js
                    </p>
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">HTML</p>
                  </div>
                </div>
              </div>
              {/*================ BOX=3===================*/}

              <div>
                <div className="mt-4 sm:mt-0 border border-[#ABB2BF] group h-[130px] hover:bg-[#959b9b6c] transition-all duration-300">
                  <h3 className="text-[16px] py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                    Tools
                  </h3>
                  <div className="px-3 py-2">
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                      <span > VSCode</span> <span> Git-Hub</span>{" "}
                      <span> FireBase</span>
                    </p>
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                      windows
                    </p>
                    <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                      <span> Netlify </span> <span> vercel</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="border border-[#ABB2BF] group h-[130px] hover:bg-[#959b9b6c] transition-all duration-300">
                    <h3 className="text-[16px] py-2 px-3 ff_fira text-white font-medium border-b border-b-[#ABB2BF]">
                      Library
                    </h3>
                    <div className="px-3 py-2">
                      <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                        <span> bootstrap</span> <span>AOS</span>{" "}
                      </p>
                      <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                        Tailwind.css
                      </p>
                      <p className="text-[16px] ff_fira text-[#ABB2BF] group-hover:text-white">
                        GSAP{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Skills;
