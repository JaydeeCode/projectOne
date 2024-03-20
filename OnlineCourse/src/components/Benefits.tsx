import versatility from "../assets/images/versatile.png";
import careerAdvancement from "../assets/images/careerAdvancement.png";
import projectOwnership from "../assets/images/projectOwnership.png";
import problemSolvingSkills from "../assets/images/problemSolving.png";

export default function Benefits() {
  return (
    <section className="w-full text-white bg-blue-600 py-60">
      <div className="flex flex-col items-center justify-between w-3/4 gap-10 m-auto">
        <div className="flex flex-col items-center w-full space-y-20 text-xl text-center">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Why Learn Full Stack Development
          </h1>
          <p>
            Learning full-stack development opens doors to a world of
            opportunities in the rapidly evolving tech industry. By acquiring
            skills in both front-end and back-end development, you'll become a
            versatile and in-demand developer capable of building dynamic,
            responsive, and scalable web applications.
          </p>
          <p className="font-bold">
            Benefits of Learning Full Stack Development:
          </p>
          {/* Card Container */}
          <div className="flex flex-col w-full gap-10 text-sm lg:flex-row">
            {/* Card 1 */}
            <div className="p-5 space-y-5 border rounded-lg shadow-lg">
              <div className="flex justify-center ">
                <img
                  src={versatility}
                  alt=""
                  className="object-scale-down w-48"
                />
              </div>
              <h1 className="font-bold">Versatility</h1>
              <p>
                Gain expertise in both front-end technologies (HTML, CSS,
                JavaScript, etc.) and back-end frameworks (Node.js, Django, Ruby
                on Rails, etc.), making you a well-rounded developer capable of
                handling all aspects of web development projects.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-5 space-y-5 border rounded-lg shadow-lg">
              <div className="flex justify-center ">
                <img
                  src={careerAdvancement}
                  alt=""
                  className="object-scale-down w-48"
                />
              </div>

              <h1 className="font-bold">Career Advancement</h1>
              <p>
                Full-stack developers are highly sought after by companies of
                all sizes, from startups to multinational corporations. By
                mastering full-stack development, you'll enhance your career
                prospects and unlock opportunities for advancement and higher
                salaries.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-5 space-y-5 border rounded-lg shadow-lg">
              <div className="flex justify-center ">
                <img
                  src={projectOwnership}
                  alt=""
                  className="object-scale-down w-48"
                />
              </div>

              <h1 className="font-bold">Project Ownership</h1>
              <p>
                With the ability to handle both front-end and back-end tasks,
                you'll have greater autonomy and ownership over your projects.
                From designing user interfaces to implementing database
                structures, you'll have the skills to bring your ideas to life
                from start to finish.
              </p>
            </div>
            {/* Card 4 */}
            <div className="p-5 space-y-5 border rounded-lg shadow-lg">
              <div className="flex justify-center ">
                <img
                  src={problemSolvingSkills}
                  alt=""
                  className="object-scale-down w-48"
                />
              </div>

              <h1 className="font-bold"> Problem-Solving Skills</h1>
              <p>
                Full-stack development requires a comprehensive understanding of
                both client-side and server-side technologies, honing your
                problem-solving and critical thinking abilities as you tackle
                challenges at every stage of the development process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
