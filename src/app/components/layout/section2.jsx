'use client';
import Image from "next/image";
import icon from "/public/Icon.svg";
import icon2 from "/public/Icon2.svg";
import icon3 from "/public/Icon3.svg";
import { useState } from "react";

function SectionTwo() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
     
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

  return (
    <div className="h-[55rem] bg-[#150050] text-white">
      <div className="flex">
        <h1 className="font-bold text-[3rem]">
          Here's how Roooby can benefit your business
        </h1>
        <p>
          Build more meaningful and lasting relationships — better understand
          their needs, identify new opportunities to help, address any problems
          faster.
        </p>
      </div>
      <div className="flex justify-around">
        <div className="">
          <div
            className={` ${isHovered ? "bg-[#FFE377]" : "bg-[#1E0A57]"}
            w-[23.3rem]  h-[27.4rem] flex flex-col  mb-[4.43rem] justify-center px-[2rem] rounded-lg`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Image priority src={icon} alt="icon1"  className={` ${isHovered ? " invert-0" : "invert"}`}/>
            <div className={`w-[19.3rem]  mt-[3.37rem] border-t-2  ${isHovered ? " border-black" : "border-white"}`}>
              <p className={`font-bold text-[1.25rem] w-[14ch] py-[1.3rem] ${isHovered ? " invert" : "invert-0"}`}>
                Lead customers to happiness
              </p>
              <p className={` max-w-[26ch] ${isHovered ? " invert" : "invert-0"}`}>
                Roooby Support helps you provide personalized support when and
                where customers need it, so customers stay happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionTwo;
