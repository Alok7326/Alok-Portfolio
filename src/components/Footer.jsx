// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa6";
// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className="py-12">
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
//           <div className=" flex flex-col items-center justify-center">
//             <div className="flex space-x-4">
//               <FaFacebook size={24} />
//               <FaTwitter size={24} />
//               <FaInstagram size={24} />
//               <FaLinkedinIn size={24} />
//             </div>
//             <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
//               <p className="text-sm">
//                 &copy; 2024 Your Company. All rights reserved.
//               </p>
//               <p className="text-sm">Supportive Partner ❤️ Ankush</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 mt-10">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="hover:text-blue-500 transition-all duration-300"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-all duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition-all duration-300"
          >
            <FaLinkedinIn size={28} />
          </a>
        </div>

        {/* Divider Line */}
        <div className="mt-6 border-t border-gray-600"></div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; 2024 Alok's Portfolio. All rights reserved.
          </p>
          <p className="text-sm">Built with ❤️ by Alok</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
