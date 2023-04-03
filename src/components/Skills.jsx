import { useQuery, gql } from "@apollo/client";

const GET_SKILLS = gql`
  query skills {
    skills {
      name
      skillType
      skillLogo {
        fileName
        url
      }
    }
  }
`;

const Skills = () => {
  const { loading, error, data } = useQuery(GET_SKILLS);

  if (loading) {
    return <div className="text-white">loading...</div>;
  }

  if (error) {
    return <div className="text-white">error</div>;
  }
  console.log(data);
  return (
    <section className="px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
          WHAT I KNOW
        </h2>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-around ">
          <div className="bg-slate-700 w-full lg:w-1/3 rounded-lg p-8 pb-16 shadow-2xl shadow-cyan-600/50 border-2 border-cyan-400/25">
            <h3 className="text-white text-center text-2xl mb-14 tracking-widest">
              Frontend
            </h3>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-y-10 gap-x-4 justify-items-center">
              {data.skills
                .filter((skill) => skill.skillType === "Frontend")
                .map((skill) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.skillLogo.url}
                      alt=""
                      className="h-12 m-0 object-cover"
                    />
                    <h3 className="text-white text-sm font-light mt-6">
                      {skill.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-slate-700 w-full lg:w-1/3 rounded-lg p-8 pb-16 shadow-2xl shadow-green-600/50 border-2 border-green-400/25">
            <h3 className="text-white text-center text-2xl mb-14 tracking-widest">
              Backend
            </h3>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-y-10 gap-x-4  justify-items-center">
              {data.skills
                .filter((skill) => skill.skillType === "Backend")
                .map((skill) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.skillLogo.url}
                      alt=""
                      className="h-12 m-0 object-cover"
                    />
                    <h3 className="text-white text-sm font-light mt-6">
                      {skill.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-slate-700 w-full lg:w-1/3 rounded-lg p-8 pb-16 shadow-2xl shadow-yellow-600/50 border-2 border-yellow-400/25">
            <h3 className="text-white text-center text-2xl mb-14 tracking-widest">
              Tools
            </h3>
            <div className="grid grid-cols-4 lg:grid-cols-3 gap-y-10 gap-x-4  justify-items-center">
              {data.skills
                .filter((skill) => skill.skillType === "tools")
                .map((skill) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.skillLogo.url}
                      alt=""
                      className="h-12 m-0 object-cover"
                    />
                    <h3 className="text-white text-sm font-light mt-6">
                      {skill.name}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
