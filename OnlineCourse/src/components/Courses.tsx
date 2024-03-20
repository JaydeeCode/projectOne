import frontEnd from "../assets/images/frontEnd.png";
import backEnd from "../assets/images/backEnd.png";
import fullStack from "../assets/images/fullStack.png";
import specialized from "../assets/images/specialized.png";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export default function Courses() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-between w-3/4 m-auto space-y-20 text-base text-blue-900">
        <h1 className="text-5xl font-bold text-center">
          Ready to Begin Your Full Stack Journey?
        </h1>
        <p className="text-xl text-center">
          Explore our curated selection of full-stack development courses and
          start your journey towards becoming a proficient and versatile
          developer today.
        </p>
        {/* Card Container */}
        <div className="flex flex-col w-full gap-5 text-sm lg:flex-row">
          {/* Card 1 */}
          <div className="rounded-lg border border-blue-600 lg:w-[25%] w-full">
            <img
              src={frontEnd}
              alt=""
              className="object-cover w-full rounded-t-lg"
            />
            <div className="flex flex-col justify-between p-5 h-[20rem] ">
              <div className="space-y-5">
                <h1 className="font-bold">
                  Become a Front-End Developer: From Beginner to Pro
                </h1>
                <ul className="list-disc list-inside">
                  <li>HTML5 and CSS3 Fundamentals</li>
                  <li>Responsive Web Design with Bootstrap</li>
                  <li>JavaScript for Beginners</li>
                  <li>React.js Essentials</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <p className="font-bold">4.8</p>
                  <span className="flex flex-row text-xl">
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStarHalf className="text-yellow-500 " />
                  </span>
                  <p>(499,435)</p>
                </div>
                <div className="flex flex-row space-x-2 ">
                  <p className="font-bold ">₱ 2,290.00</p>
                  <p className="text-blue-300 line-through ">₱ 3,100.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded-lg border border-blue-600 lg:w-[25%] w-full">
            <img
              src={backEnd}
              alt=""
              className="object-scale-down w-full rounded-t-lg"
            />

            <div className="p-5 h-[20rem] flex flex-col justify-between">
              <div className="space-y-5">
                <h1 className="font-bold">
                  From Beginner to Back-End Master: Building Secure Web
                  Applications
                </h1>
                <ul className="list-disc list-inside">
                  <li>Introduction to Node.js</li>
                  <li>Building RESTful APIs with Express</li>
                  <li>Database Fundamentals with MongoDB</li>
                  <li>Authentication and Authorization in Node.js</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <p className="font-bold">4.7</p>
                  <span className="flex flex-row text-xl">
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStarHalf className="text-yellow-500 " />
                  </span>
                  <p>(248,053)</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="font-bold ">₱ 1,899.00</p>
                  <p className="text-blue-300 line-through ">₱ 2,290.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="rounded-lg border border-blue-600 lg:w-[25%] w-full">
            <img
              src={fullStack}
              alt=""
              className="object-scale-down w-full rounded-t-lg"
            />
            <div className="p-5  h-[20rem] flex flex-col justify-between">
              <div className="space-y-5">
                <h1 className="font-bold">
                  Full-Stack Development Mastery: Build Real-World Applications
                </h1>
                <ul className="list-disc list-inside">
                  <li>Full Stack Web Developer Bootcamp</li>
                  <li>Mastering MERN Stack Development</li>
                  <li>MEAN Stack Development: From Beginner to Expert</li>
                  <li>Full Stack Project-Based Courses Bundle</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <p className="font-bold">5.0</p>
                  <span className="flex flex-row text-xl">
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                  </span>
                  <p>(538,777)</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="font-bold ">₱ 3,700.00</p>
                  <p className="text-blue-300 line-through ">₱ 4,000.00</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="rounded-lg border border-blue-600 lg:w-[25%] w-full">
            <img
              src={specialized}
              alt=""
              className="object-scale-down w-full rounded-t-lg"
            />

            <div className="p-5  h-[20rem] flex flex-col justify-between">
              <div className="space-y-5">
                <h1 className="font-bold">
                  Take Your Web Development to the Next Level: Security,
                  Performance & Efficiency
                </h1>
                <ul className="list-disc list-inside">
                  <li>Web Application Security</li>
                  <li>Progressive Web Apps (PWAs)</li>
                  <li>Version Control with Git and Github</li>
                  <li>Continuous Integration and Deployment (CI/CD)</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <p className="font-bold">4.5</p>
                  <span className="flex flex-row text-xl">
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStar className="text-yellow-500 " />
                    <IoMdStarOutline className="text-yellow-500 " />
                  </span>
                  <p>(128,031)</p>
                </div>
                <div className="flex flex-row space-x-2">
                  <p className="font-bold ">₱ 2,500.00</p>
                  <p className="text-blue-300 line-through ">₱ 3,250.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="p-3 text-xl font-bold text-white bg-blue-900 rounded-lg">
          View All Courses
        </button>
      </div>
    </section>
  );
}
