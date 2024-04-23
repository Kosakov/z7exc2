import Image from "next/image";
import logo from "/public/Roooby.svg";

function NavBar() {
  return (
    <nav className="w-100% h-auto  flex justify-around items-center pt-8">
      <Image priority src={logo} alt="Logooo"/>
      <div className=" text-sm font-medium flex gap-9 ">
        <a href="#" className="hover:text-gray-500">Product</a>
        <a href="#" className="hover:text-gray-500">Pricing</a>
        <a href="#" className="hover:text-gray-500">Company</a>
        <a href="#" className="hover:text-gray-500">Recourses</a>
        <a href="#" className="hover:text-gray-500">Contact</a>
      </div>
      <div className="flex gap-5">
      <button className="hover:bg-gray-300  border-2 border-[#DCDCDC] text-xs bg-[#FFFF] text-black tracking-[-0.19px] rounded-md py-3 px-6 font-bold leading-4 ">
        Log In
      </button>
      <button className=" text-xs bg-[#150050] text-white tracking-[-0.19px] rounded-md py-3 px-6 font-bold leading-4 ">
        Try for free
      </button>
      </div>
    </nav>
  );
}

export default NavBar;
