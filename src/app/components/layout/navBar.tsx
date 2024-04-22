import Image from "next/image";
import logo from "/public/Roooby.svg";

function NavBar() {
  return (
    <nav>
      <Image priority src={logo} alt="Follow us on Twitter" />
      <div>
        <a href="#">Product</a>
        <a href="#">Pricing</a>
        <a href="#">Company</a>
        <a href="#">Recourses</a>
        <a href="#">Contact</a>
      </div>
      <button className=" border-2 border-[#DCDCDC] text-xs bg-[#FFFF] text-black tracking-[-0.19px] rounded-sm py-3 px-6 font-bold leading-4 ">
        Log In
      </button>
      <button className=" text-xs bg-[#150050] text-white tracking-[-0.19px] rounded-sm py-3 px-6 font-bold leading-4 ">
        Try for free
      </button>
    </nav>
  );
}

export default NavBar;
