function MyProjects() {
  const projects = [
    {
      id: 1,
      logo: "/voting.png",
      name: "Online Voting System",
      desc: "A secure web-based voting platform using MERN stack.",
      code: "#", // Add actual GitHub repo link
    },
    {
      id: 2,
      logo: "/course-app.png",
      name: "Course Selling Application",
      desc: "E-commerce platform for selling courses, built with React and Node.js.",
      code: "#",
    },
    {
      id: 3,
      logo: "/portfolio.png",
      name: "Responsive Portfolio Website",
      desc: "My personal portfolio showcasing my skills and projects.",
      code: "#",
    },
  ];

  return (
    <section
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">My Projects</h1>
      <span className="underline font-semibold">Some of my best work</span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {projects.map(({ id, logo, name, desc, code }) => (
          <article
            key={id}
            className="border-[2px] rounded-lg shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={logo}
              className="w-[100px] h-[100px] rounded-full border-[2px] mb-3"
              alt={name}
            />
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-700">{desc}</p>
            <div className="flex space-x-3 mt-3">
              <a href={code} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source Code
                </button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MyProjects;
