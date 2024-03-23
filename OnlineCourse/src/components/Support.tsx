import forum from "../assets/images/forum.png";
import knowledgeBase from "../assets/images/knowledgeBase.png";
import liveSession from "../assets/images/liveSession.png";
import socialGroups from "../assets/images/socialGroups.png";

export default function Support() {
  return (
    <section className="w-full">
      <div className="flex flex-col justify-center w-[90%] sm:w-3/4 m-auto space-y-40 text-center text-blue-900">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Community and Suppport
        </h1>
        {/* Card Container */}
        <div className="flex flex-col w-full gap-10 text-sm text-center sm:text-xl lg:flex-row">
          {/* Card 1 */}
          <div className="p-5 space-y-5 border rounded-lg shadow-lg">
            <div className="flex justify-center ">
              <img src={forum} alt="" className="object-scale-down w-48" />
            </div>
            <h1 className="font-bold">Thriving Forum</h1>
            <p>
              Post your questions, share your progress, and learn from fellow
              students and industry experts.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-5 space-y-5 border rounded-lg shadow-lg">
            <div className="flex justify-center ">
              <img
                src={knowledgeBase}
                alt=""
                className="object-scale-down w-48"
              />
            </div>

            <h1 className="font-bold">Comprehensive Knowledge Base</h1>
            <p>
              Find answers to common questions, access helpful tutorials, and
              dive deeper into specific topics.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-5 space-y-5 border rounded-lg shadow-lg">
            <div className="flex justify-center ">
              <img
                src={liveSession}
                alt=""
                className="object-scale-down w-48"
              />
            </div>

            <h1 className="font-bold">Live Q&A Sessions</h1>
            <p>
              Join our instructors and guest experts for live sessions to get
              real time guidance and insights.
            </p>
          </div>
          {/* Card 4 */}
          <div className="p-5 space-y-5 border rounded-lg shadow-lg">
            <div className="flex justify-center ">
              <img
                src={socialGroups}
                alt=""
                className="object-scale-down w-48"
              />
            </div>

            <h1 className="font-bold">Engaging Social Groups</h1>
            <p>
              Connect with fellow learners, network with professionals, and
              participate in discussions on various platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
