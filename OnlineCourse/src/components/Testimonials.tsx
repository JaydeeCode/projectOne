import womenOne from "../assets/images/womenOne.png";
import manOne from "../assets/images/manOne.png";
import manTwo from "../assets/images/manTwo.png";

export default function Testimonials() {
  return (
    <section className="w-full bg-blue-600 py-60">
      <div className="flex flex-col items-center w-[90%] sm:w-3/4 m-auto space-y-20 text-white">
        <h1 className="text-3xl font-bold sm:text-5xl">Testimonials</h1>
        <div className="flex flex-col justify-center w-full space-y-20 overflow-y-scroll text-sm sm:text-xl md:p-10">
          {/* To wrap testimonial cards */}
          <div className="flex flex-col w-full space-y-10 md:flex-row md:space-y-0 md:w-[120rem] md:space-x-10">
            {/* Card 1 */}
            <div className="flex flex-col justify-between border rounded-lg md:w-[40rem]">
              {/* Image */}
              <img src={manOne} alt="" className="w-full rounded-t-lg" />
              {/* Content */}
              <div className="flex flex-col justify-between p-5 text-center h-[12rem] space-y-10">
                <div className="italic">
                  "Since learning full-stack development with CyBorge Academy,
                  I've landed my dream job as a web developer!"
                </div>
                <div>
                  <p className="font-bold">John Doe</p>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col justify-between border rounded-lg md:w-[40rem]">
              {/* Image */}
              <img src={womenOne} alt="" className="w-full rounded-t-lg" />
              {/* Content */}
              <div className="flex flex-col justify-between p-5 text-center h-[12rem] space-y-10">
                <div className="italic">
                  " I had no coding experience, but your beginner-friendly
                  courses made it easy and enjoyable to learn full-stack
                  development."
                </div>
                <div>
                  <p className="font-bold">Jane Smith</p>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col justify-between border rounded-lg md:w-[40rem]">
              {/* Image */}
              <img src={manTwo} alt="" className="w-full rounded-t-lg" />
              {/* Content */}
              <div className="flex flex-col justify-between p-5 text-center h-[12rem] space-y-10">
                <div className="italic">
                  " Your comprehensive curriculum helped me build a portfolio of
                  projects that impressed potential employers. "
                </div>
                <div>
                  <p className="font-bold">David Lee</p>
                  <p>Freelance Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="p-3 font-bold text-white bg-blue-900 rounded-lg">
          View All Testimonials
        </button>
      </div>
    </section>
  );
}