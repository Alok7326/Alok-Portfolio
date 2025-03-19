import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-4xl font-extrabold mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed md:text-xl animate-fade-in">
          Hello, I'm <span className="font-bold text-gray-900">Alok</span>, a
          passionate
          <span className="text-blue-500 font-semibold">
            {" "}
            Web Developer
          </span>{" "}
          specializing in the
          <span className="text-green-600 font-semibold"> MERN Stack</span>.
          With a strong foundation in Computer Science and an
          <span className="text-purple-600 font-semibold">
            {" "}
            MCA from GIET University
          </span>
          , I love building{" "}
          <span className="text-red-500 font-semibold">
            scalable, dynamic, and visually stunning web applications
          </span>
          .
        </p>
        <p className="text-lg text-gray-700 leading-relaxed md:text-xl mt-4 animate-fade-in">
          My expertise lies in crafting seamless{" "}
          <span className="text-indigo-500 font-semibold">
            user experiences
          </span>{" "}
          and writing{" "}
          <span className="text-teal-500 font-semibold">
            clean, efficient code
          </span>
          . Driven by a curiosity for technology and
          <span className="text-yellow-500 font-semibold">
            {" "}
            problem-solving
          </span>
          , I am constantly learning and evolving to stay ahead in the
          ever-changing tech landscape.
        </p>
        <p className="text-xl font-semibold text-gray-900 mt-6 animate-pulse">
          "Passionate about code, driven by creativity! 🚀"{" "}
        </p>
        <br />

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h1
            className="font-semibold text-2xl mb-4 text-center md:text-left 
  bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 
  text-transparent bg-clip-text"
          >
            Educational Background
          </h1>

          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Master of Computer Applications (MCA)
              </h2>
              <p className="text-gray-600">
                GIET University, Gunupur | Expected 2026
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Bachelor of Science in Computer Science (BSc CS)
              </h2>
              <p className="text-gray-600">
                Sambalpur University, Odisha | Graduated in 2024
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Class 12 (Science)
              </h2>
              <p className="text-gray-600">
                Pragati Higher Secondary School, Bhawanipatna | CHSE, Odisha |
                2021
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">Class 10</h2>
              <p className="text-gray-600">
                Rengali High School | BSE, Odisha | 2019
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h1
            className="font-semibold text-2xl mb-4 text-center md:text-left 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    text-transparent bg-clip-text"
          >
            Projects
          </h1>

          <div className="space-y-4">
            {/* Project 1 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Course Selling Application
              </h2>
              <p className="text-gray-600">
                Built an e-learning platform featuring course purchases, user
                authentication, and payment integration.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Technologies:</strong> MERN Stack
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Duration:</strong> Mar 2025 – May 2025
              </p>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Responsive Portfolio Website
              </h2>
              <p className="text-gray-600">
                Designed and developed a fully responsive portfolio website to
                showcase skills, projects, and experience.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Technologies:</strong> React.js, Tailwind CSS, Framer
                Motion
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Duration:</strong> Jan 2025 – Feb 2025
              </p>
            </div>
            {/* Project 3 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Online Voting System
              </h2>
              <p className="text-gray-600">
                Developed a secure and scalable online voting platform for
                conducting digital elections.
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Technologies:</strong> JavaScript, PHP, Mysql
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Duration:</strong> Feb 2024 – Apr 2024
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h1
            className="font-semibold text-2xl mb-4 text-center md:text-left 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    text-transparent bg-clip-text"
          >
            Skills & Expertise
          </h1>

          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Programming Languages
              </h2>
              <p className="text-gray-600">Java, JavaScript</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Frontend Development
              </h2>
              <p className="text-gray-600">HTML, CSS, React.js</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Problem Solving
              </h2>
              <p className="text-gray-600">
                Data Structures & Algorithms (DSA)
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">Soft Skills</h2>
              <p className="text-gray-600">
                Logical Thinking, Team Collaboration, Communication
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h1
            className="font-semibold text-2xl mb-4 text-center md:text-left 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text"
          >
            Professional Experience
          </h1>

          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Web Development Intern
              </h2>
              <p className="text-gray-600">
                KnackTech (Conducted by Wipro) | Nov 2024 - Jan 2025
              </p>
              <p className="text-gray-600">
                Successfully completed a 2-month Web Development training,
                gaining hands-on experience in building dynamic and scalable web
                applications.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h1
            className="font-semibold text-2xl mb-4 text-center md:text-left 
                bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500
                 text-transparent bg-clip-text"
          >
            Certifications & Training
          </h1>

          <div className="space-y-4">
            {/* Certification 1 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                React.js Advanced Course
              </h2>
              <p className="text-gray-600">
                Namaste React by NamasteDev.com | Completed
              </p>
            </div>

            {/* Certification 2 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Backend Development with Node.js & Express
              </h2>
              <p className="text-gray-600">
                Sheryians Coding School | Completed
              </p>
            </div>

            {/* Certification 3 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                DSA using Java
              </h2>
              <p className="text-gray-600">PW Skills | Completed</p>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h1
            className="font-semibold text-2xl mb-4 text-center md:text-left 
    bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 
    text-transparent bg-clip-text"
          >
            Achievements & Awards
          </h1>

          <div className="space-y-4">
            {/* Achievement 1 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Web Development Internship at KnackTech
              </h2>
              <p className="text-gray-600">
                Successfully completed a 2-month Web Development internship,
                conducted by Wipro (Nov 2024 – Jan 2025).
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Recognized as a Top Project
              </h2>
              <p className="text-gray-600">
                My project was selected as one of the top projects at GIET
                University, showcasing innovation and technical excellence.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
              <h2 className="font-bold text-lg text-gray-800">
                Competitive Programming
              </h2>
              <p className="text-gray-600">
                Solved 50+ DSA problems on LeetCode & CodeChef.
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
