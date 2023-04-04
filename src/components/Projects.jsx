import { useQuery, gql } from "@apollo/client";
import Project from "./Project";

const ALL_PROJECTS = gql`
  query ALL_PROJECTS {
    projects {
      name
      demo
      description
      image {
        url
      }
      skills {
        name
        skillLogo {
          url
        }
      }
      sourceCode
      demoUsername
      demoPassword
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(ALL_PROJECTS);

  if (loading) {
    return <div className="text-white">loading...</div>;
  }

  if (error) {
    return <div className="text-white">error</div>;
  }
  return (
    <section className="px-4" id="projects-section">
      <div className="container mx-auto">
        <div className="my-32">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            WHAT I CAN DO
          </h2>

          <div className="grid lg:grid-cols-2 w-full gap-12">
            {data.projects.map((project) => (
              <Project project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
