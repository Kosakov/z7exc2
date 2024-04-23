import Image from "next/image";

import dashboardPic from "/public/dashboard.svg"
import googlePic from "/public/Google.svg"
import atlassianPic from "/public/Atlassian.svg"
import canonPic from "/public/Canon.svg"
import walmartPic from "/public/Walmart.svg"
import amazonPic from "/public/Amazon.svg"

function SectionOne(){
return(
    <div className="flex flex-wrap">
        <div className=" flex-1 basis-[50%]">
            <h1 className=" font-bold text-[4rem]">Bringing companies and customers together, anywhere</h1>
            <p className=" text-lg">An awesome & powefull tools for your business, increase business revenue with enterprise-grade links built to acquire and engage cutomers.</p>
            <div className="relative w-[28.5rem]">
            <input
            type="text"
            placeholder="Enter your email"
            className=" min-h-[4.5rem]  rounded-xl min-w-[28.5rem] text-left place-self-center text-black outline-none max-sm:min-w-60"
          />
          <button
            
            className="bg-[#150050] font-bold h-14 border-2 rounded-xl min-w-[8.8rem] text-[#FFFF] text-center p-2 absolute border-transparent left-[19.1rem] top-[0.5rem]">
            Try for Free
          </button>
            </div>
            <p className=" text-sm">Full access. No credit card required.</p>        
        </div>
        <div className="basis-[50%]">
        <Image priority src={dashboardPic} alt="dashboardPic"/>
         
        </div>
        <div className="flex flex-row gap-[6.68rem] mt-[8.18rem]">
            <p>Trusted by 1,000+ customers</p>
            <Image priority src={googlePic} alt="googlePic"/>
            <Image priority src={atlassianPic} alt="atlassianPic"/>
            <Image priority src={canonPic} alt="canonPic"/>
            <Image priority src={walmartPic} alt="walmartPic"/>
            <Image priority src={amazonPic} alt="amazonPic"/>
        </div>
    </div>
)
}

export default SectionOne;