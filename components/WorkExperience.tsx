import { TextGenerateEffect } from "./Ui/TextGenerateEffect";

const WorkExperience = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Work <span className="text-purple">Experience</span>
      </h1>
      <div className="max-w-3xl mx-auto pt-20">
        <div className="border-2 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-600">
          <TextGenerateEffect
            words="Freelance Flutter Front-End Developer"
            className="text-2xl font-semibold text-gray-100 mb-4"
          />

          {/* Company Name and Website */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-300">
              Company:{" "}
              <span className="text-gray-200">Angyal Technologies</span>
            </h3>
            <a
              href="https://www.angyaltech.com/"
              className="text-blue-400 hover:underline"
            >
              https://www.angyaltech.com/
            </a>
          </div>

          {/* Responsibilities List */}
          <ul className="space-y-4">
            <li className="text-lg text-gray-200">
              Developed a responsive and user-friendly classified app using
              Flutter, following modular architecture for scalability.
            </li>
            <li className="text-lg text-gray-200">
              Conducted multi-device testing to ensure compatibility and
              seamless performance.
            </li>
            <li className="text-lg text-gray-200">
              Collaborated with teams to align front-end features with backend
              and business goals.
            </li>
            <li className="text-lg text-gray-200">
              Optimized UI/UX and resolved issues for a smooth user experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
