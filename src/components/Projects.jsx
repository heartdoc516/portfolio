import Project from "./Project";
import { useLanguage } from "../../lib/LanguageContext";

const Projects = ({ projects }) => {
  const language = useLanguage();

  return (
    <section className="px-4" id="projects-section">
      <div className="container mx-auto">
        <div className="my-32">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            {language === "english" ? "WHAT I CAN DO" : "CE QUE JE FAIS"}
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
