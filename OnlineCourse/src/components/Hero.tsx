import logo from "../assets/images/logo.png";
import heroGraphic from "../assets/images/heroSectionFigure.png";

export default function Hero() {
  return (
    <section className="flex justify-center w-full h-full bg-blue-600">
      <div className="flex flex-row items-center justify-between w-3/4 ">
        {/* To wrap text, btn, & logo content */}
        <div className="w-full space-y-10 text-white md:w-1/2">
          <img
            src={logo}
            alt="logo"
            className="block w-full max-w-36 md:hidden"
          />
          <h1 className="text-3xl font-bold sm:text-5xl">
            Master Full Stack Development
          </h1>
          <h3 className="text-xl">
            Build Dynamic <br /> Web Applications from <br />
            Front to Back
          </h3>
          <button className="p-3 text-xl font-bold text-white bg-blue-900 rounded-lg ">
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
