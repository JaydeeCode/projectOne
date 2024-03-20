import aboutCover from "../assets/images/aboutUsCover.png";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-between w-3/4 gap-10 m-auto md:flex-row">
        <img src={aboutCover} alt="" className="w-full bg-cover md:w-1/2" />
        <div className="flex flex-col items-center w-full space-y-10 text-xl text-center text-blue-900 md:w-1/2">
          <h1 className="text-3xl font-bold sm:text-5xl">About Us</h1>
          <p>
            At CyBorge Academy, we're passionate about empowering individuals to
            become proficient full-stack developers. Our team of experienced
            instructors is dedicated to providing high-quality online courses
            that equip you with the skills and knowledge needed to thrive in the
            fast-paced world of web development.
          </p>
          <a
            href="#"
            className="flex flex-row space-x-2 underline underline-offset-8"
          >
            <p>Learn More about our Mission and Values</p>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
}
