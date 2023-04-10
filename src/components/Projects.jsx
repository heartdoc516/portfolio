import Project from "./Project";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <section className="px-4" id="projects-section">
      <div className="container mx-auto">
        <div className="my-32">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            WHAT I CAN DO
          </h2>

          <div className="grid lg:grid-cols-2 w-full gap-12">
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
