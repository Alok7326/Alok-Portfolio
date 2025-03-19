import React from "react";
import pic from "../../public/photo.avif";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Welcome In My Feed
            </span>
            <div className="flex space-x-1 text-2xl md:text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              <h1>Hello, I'm </h1>
              <ReactTyped
                className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                strings={["Alok", "a Programmer", "a Coder", "a Developer"]}
                // strings={["Alok", "Love with Sai Shree", "Alok ❤️💕 Sai Shree"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              "I'm a passionate MCA student with a strong foundation in computer
              science and web development. I specialize in building modern,
              responsive applications using technologies like JavaScript, React,
              and Node.js. I love solving complex problems and continuously
              learning new skills to improve my craft. Currently, I'm exploring
              new opportunities to grow as a developer and work on exciting
              projects."
            </p>

            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Available on
                </h1>

                <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100070052190039"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border-2 border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 inline-block transition-transform duration-300 hover:scale-110 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                    >
                      <div className="bg-white p-2 md:p-3 rounded-md">
                        <FaSquareFacebook className="text-xl md:text-2xl cursor-pointer text-blue-600 hover:text-blue-800" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/alok-patel-4a5a1b265"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border-2 border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 inline-block transition-transform duration-300 hover:scale-110 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                    >
                      <div className="bg-white p-2 md:p-3 rounded-md">
                        <FaLinkedin className="text-xl md:text-2xl cursor-pointer text-blue-600 hover:text-blue-800" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border-2 border-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 inline-block transition-transform duration-300 hover:scale-110 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                    >
                      <div className="bg-white p-2 md:p-3 rounded-md">
                        <IoLogoYoutube className="text-xl md:text-2xl cursor-pointer text-red-600 hover:text-red-800" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border-2 border-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 inline-block transition-transform duration-300 hover:scale-110 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                    >
                      <div className="bg-white p-2 md:p-3 rounded-md">
                        <FaTelegram className="text-xl md:text-2xl cursor-pointer text-blue-500 hover:text-blue-700" />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              <div className=" space-y-2">
                <h1 className="font-bold text-center  text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Currently working on
                </h1>

                <div className="flex flex-wrap justify-center gap-5 md:gap-7">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-green-500 bg-gradient-to-r from-green-200 to-green-400 hover:scale-110 duration-200">
                    <SiMongodb className="text-4xl md:text-5xl text-green-700" />
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-gray-500 bg-gradient-to-r from-gray-200 to-gray-400 hover:scale-110 duration-200">
                    <SiExpress className="text-4xl md:text-5xl text-gray-700" />
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-blue-500 bg-gradient-to-r from-blue-200 to-blue-400 hover:scale-110 duration-200">
                    <FaReact className="text-4xl md:text-5xl text-blue-700" />
                  </div>
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-green-700 bg-gradient-to-r from-green-300 to-green-500 hover:scale-110 duration-200">
                    <FaNodeJs className="text-4xl md:text-5xl text-green-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-xl md:w-[450px] md:h-[450px] border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-2xl transition-transform duration-300 hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
