import React from "react";

function Dlt() {
  return (
    <div>
      <h1>
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Certifications & Training
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>React.js Advanced Course</strong> – Namaste React,
            NamasteDev.com
          </li>
          <li>
            <strong>Backend Development with Node.js & Express</strong> –
            Sheryians Coding School
          </li>
          <li>
            <strong>DSA using Java</strong> – PW Skills
          </li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold text-lg text-gray-800">
            React.js Advanced Course
          </h2>
          <p className="text-gray-600">Namaste React by NamasteDev.com</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="font-bold text-lg text-gray-800">
            Backend Development with Node.js & Express
          </h2>
          <p className="text-gray-600">Sheryians Coding School</p>
        </div>{" "}
        {/* Mobile Navbar */}
        {/* {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
        {/* {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text === "Home"
                      ? "🏠 Home"
                      : text === "About"
                      ? "👤 About Me"
                      : text === "Projects"
                      ? "🚀 My Work"
                      : text === "Contact"
                      ? "📩 Get in Touch"
                      : text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
        {/* {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </h1>

      {/* <div className="flex space-x-5">
                      <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                      <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                      <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                      <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                    </div> */}
      {/* <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                      <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-green-500 p-2 cursor-pointer bg-gradient-to-r from-green-200 to-green-400" />
                      <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-gray-500 p-2 cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400" />
                      <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-blue-500 p-2 cursor-pointer bg-gradient-to-r from-blue-200 to-blue-400" />
                      <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2 border-green-700 p-2 cursor-pointer bg-gradient-to-r from-green-300 to-green-500" />
                    </div> */}
    </div>
  );
}

export default Dlt;
