// function PortFolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: "/mongodb.jpg",
//       name: "MongoDB",
//     },
//     {
//       id: 2,
//       logo: "/express.png",
//       name: "Express",
//     },
//     {
//       id: 3,
//       logo: "/reactjs.png",
//       name: "ReactJS",
//     },
//     {
//       id: 4,
//       logo: "/node.png",
//       name: "NodeJS",
//     },
//     {
//       id: 5,
//       logo: "/python.webp",
//       name: "Python",
//     },
//     {
//       id: 6,
//       logo: "/java.png",
//       name: "Java",
//     },
//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className="underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt={name}
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 </p>
//               </div>
//               <div className="px-6 py-4 space-x-3 justify-around">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                   Video
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   Source code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortFolio;
// function Portfolio() {
//   const cardItem = [
//     { id: 1, logo: "/mongodb.jpg", name: "MongoDB" },
//     { id: 2, logo: "/express.png", name: "Express" },
//     { id: 3, logo: "/reactjs.png", name: "ReactJS" },
//     { id: 4, logo: "/node.png", name: "NodeJS" },
//     { id: 5, logo: "/python.webp", name: "Python" },
//     { id: 6, logo: "/java.png", name: "Java" },
//   ];

//   return (
//     <section
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       {/* Gradient Background */}
//       <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 rounded-lg shadow-lg">
//         {/* <h1 className="text-4xl font-bold text-center mb-2">Portfolio</h1>
//         <p className="text-center text-lg mb-5">Featured Technologies</p> */}
//         <h1 className="text-4xl font-bold text-center mb-2">My Tech Stack</h1>
//         <p className="text-center text-lg mb-5">
//           Tools I Use to Build Amazing Projects
//         </p>

//         {/* Card Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-10">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               key={id}
//               className="bg-white text-black rounded-lg shadow-xl p-5 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={logo}
//                 className="w-[100px] h-[100px] rounded-full border-4 border-blue-400 shadow-lg mb-3"
//                 alt={name}
//               />
//               <h2 className="text-2xl font-bold">{name}</h2>
//               <p className="text-center text-gray-600">
//                 A powerful technology for development.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
function Portfolio() {
  const cardItem = [
    { id: 1, logo: "/mongodb.jpg", name: "MongoDB" },
    { id: 2, logo: "/express.png", name: "Express" },
    { id: 3, logo: "/reactjs.png", name: "ReactJS" },
    { id: 4, logo: "/node.png", name: "NodeJS" },
    { id: 5, logo: "/python.webp", name: "Python" },
    { id: 6, logo: "/java.png", name: "Java" },
  ];

  return (
    <section
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center mb-2 tracking-wide">
          My Tech Stack
        </h1>
        <p className="text-center text-lg mb-8 italic">
          The technologies I use to build high-quality applications
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center transform hover:scale-110 transition-all duration-300"
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] rounded-full border-4 border-purple-500 shadow-lg mb-4"
                alt={name}
              />
              <h2 className="text-2xl font-semibold">{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
