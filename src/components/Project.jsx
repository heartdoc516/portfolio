const Project = ({ project }) => {
  return (
    <div className="bg-gradient-to-t from-gray-900 via-slate-800 to-cyan-600/25 rounded-lg border border-gray-600">
      <div className="">
        <img
          src={project.image[0].url}
          alt=""
          className="rounded-t-lg mx-auto object-contain"
        />
      </div>
      <div className="p-10">
        <h3 className="text-white text-center text-2xl mb-6 tracking-widest">
          {project.name}
        </h3>
        <p className="text-gray-300 mb-6 text-center mb:text-left">
          {project.description}
        </p>
        <h4 className="text-white text-center text-2xl mb-6 tracking-widest">
          Tech Stack
        </h4>
        <div className="flex flex-wrap justify-center mb-10">
          {project.skills.map((skill) => (
            <div className="flex flex-col items-center p-4">
              <img
                src={skill.skillLogo.url}
                className="h-12 m-0 mb-2 object-cover"
              ></img>
              <div className="text-white">{skill.name}</div>
            </div>
          ))}
        </div>
        {project.demoUsername && (
          <div className="text-center mb-10">
            <div className="text-white">
              Demo username: {project.demoUsername}
            </div>
            <div className="text-white">
              Demo password:{project.demoPassword}
            </div>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-8">
          {project.demo && (
            <a
              target="_blank"
              href={project.demo}
              className="text-center w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-full"
            >
              DEMO
            </a>
          )}
          <a
            target="_blank"
            href={project.sourceCode}
            className="text-center w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-full"
          >
            SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
