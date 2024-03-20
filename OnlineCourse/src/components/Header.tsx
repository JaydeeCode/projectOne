import { BiSearchAlt2 } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/logo.png";

export default function header() {
  return (
    <div className="flex flex-row items-center justify-between w-3/4 space-x-3">
      <div className="flex flex-row items-center gap-5">
        <img
          src={logo}
          alt="logo"
          className="hidden w-full max-w-36 md:block"
        />
        <form action="/" className="flex flex-row items-center">
          <input type="text" className="p-1" />
          <button className="flex items-center justify-center p-1 bg-blue-900">
            <BiSearchAlt2 className="text-2xl text-white" />
          </button>
        </form>
      </div>
      <div className="flex flex-row items-center text-white">
        {/* For Larger Screen */}
        <div className="flex-row items-center hidden space-x-10 text-base font-semibold xl:flex">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">FAQs</a>
          <a href="#">Blog</a>
          <a href="#" className="px-5 py-1 bg-blue-900 rounded-md">
            Login
          </a>
        </div>
        {/* For Mobile View */}
        <div className="flex flex-row space-x-2 xl:hidden md:space-x-10">
          <MdAccountCircle className="size-7" />
          <GiHamburgerMenu className="size-7" />
        </div>
      </div>
    </div>
  );
}
