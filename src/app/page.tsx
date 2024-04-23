import Image from "next/image";
import NavBar from "./components/layout/navBar";
import SectionOne from "./components/layout/section1"

export default function Home() {
  return (
    <main className=" bg-[#F4F4F4] w-[100vw] h-[100vh]">
      <NavBar/>
      <SectionOne/>
    </main>
  );
}
