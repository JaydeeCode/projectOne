import logo from "../assets/images/logo.png";
import heroGraphic from "../assets/images/heroSectionFigure.png";

export default function Hero() {
  return (
    <section className="flex justify-center w-full h-full bg-blue-600 sm:h-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%] sm:w-3/4 ">
        {/* To wrap text, btn, & logo content */}
        <div className="flex flex-col items-center w-full space-y-10 text-sm text-center text-white md:text-xl md:items-start md:w-1/2 md:text-left">
          <img
            src={logo}
            alt="logo"
            className="block w-full mb-10 max-w-36 md:hidden"
          />
          <h1 className="text-3xl font-bold sm:text-5xl">
            Master Full Stack Development
          </h1>
          <h3>
            Build Dynamic <br /> Web Applications from <br />
            Front to Back
          </h3>
          <button className="p-3 font-bold text-white bg-blue-900 rounded-lg ">
            Explore Courses
          </button>
        </div>
        {/* To wrap image */}
        <div className="w-1/2 ">
          <img src={heroGraphic} alt="" className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
