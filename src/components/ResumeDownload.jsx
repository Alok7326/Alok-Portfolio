import React from "react";
import { FaDownload } from "react-icons/fa";

function ResumeDownload() {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Resume Download Button */}
      <a
        href="/Alok_Resume.pdf" // Ensure the file is inside /public folder
        download="Alok_Resume.pdf"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaDownload size={20} />
        Download Resume
      </a>

      {/* Horizontal Line with Gradient Effect */}
      <div className="w-3/4 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mt-6"></div>

      {/* Gradient Text Effect */}
      <p className="mt-4 text-sm text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
        Click the button to get my latest resume and know more about me! 🚀
      </p>
    </div>
  );
}

export default ResumeDownload;
