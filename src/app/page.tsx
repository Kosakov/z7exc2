import Image from "next/image";
import NavBar from "./components/layout/navBar";
import SectionOne from "./components/layout/section1"
import SectionTwo from "./components/layout/section2"


export default function Home() {
  return (
    <main className=" bg-[#F4F4F4] max-w-[1440px] h-[100vh]">
      <NavBar/>
      <div className="mt-[6rem]">
      <SectionOne/>
      </div>
      <SectionTwo/>
      
    </main>
  );
}
