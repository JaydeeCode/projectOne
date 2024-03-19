import { BiSearchAlt2 } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

export default function header() {
  return (
    <section className="bg-blue-600 flex justify-center w-full h-16">
      <div className=" flex flex-row w-full justify-between items-center mx-10">
        <div className="flex flex-row space-x-5 items-center">
          <img src="./public/images/logo.png" alt="" className="max-w-32" />
          <form action="/" className="flex flex-row items-center">
            <input type="text" className="h-7 w-full" />
            <button className="bg-blue-900">
              <BiSearchAlt2 className="text-white size-7" />
            </button>
          </form>
        </div>
        <div className="flex flex-row items-center text-white">
          {/* For Larger Screen */}
          <div className=" flex-row space-x-10 items-center hidden md:flex text-base font-semibold">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
            <a href="#">Blog</a>
            <a href="#" className="bg-blue-900 px-5 py-1 rounded-md">
              Login
            </a>
          </div>
          {/* For Mobile View */}
          <div className="md:hidden flex flex-row space-x-5 md:space-x-10">
            <MdAccountCircle className="size-7" />
            <GiHamburgerMenu className="size-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
