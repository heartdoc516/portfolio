import { useLanguage } from "../../lib/LanguageContext";

const Skills = ({ skills }) => {
  const language = useLanguage();

  return (
    <section className="px-4 " id="skills-section">
      <div className="container mx-auto ">
        <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
          {language === "english" ? "WHAT I KNOW" : "CE QUE JE SAIS"}
        </h2>

        <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-around ">
          <div className="bg-gradient-to-bl from-gray-600/50  to-gray-950 w-full lg:w-1/3 rounded-lg p-8 pb-16 m-4  border border-gray-700">
            <h3 className="text-white text-center text-2xl mb-14 tracking-widest">
              Frontend
            </h3>
            <div className="grid grid-cols-3 gap-y-10 justify-items-center">
              {skills
                .filter((skill) => skill.skillType === "Frontend")
                .map((skill) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.skillLogo.url}
                      alt=""
                      className="h-12 m-0 object-contain"
                    />
                    <h3 className="text-gray-300 text-sm mt-6">{skill.name}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-gradient-to-bl from-gray-600/50  to-gray-950 w-full lg:w-1/3 rounded-lg p-8 m-4 pb-16 border border-gray-700">
            <h3 className="text-white text-center text-2xl mb-14 tracking-widest">
              Backend
            </h3>
            <div className="grid grid-cols-3 gap-y-10 gap-x-4  justify-items-center">
              {skills
                .filter((skill) => skill.skillType === "Backend")
                .map((skill) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.skillLogo.url}
                      alt=""
                      className="h-12 m-0 object-contain"
                    />
                    <h3 className="text-gray-300 text-sm mt-6">{skill.name}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-gradient-to-bl from-gray-600/50  to-gray-950 w-full lg:w-1/3 rounded-lg p-8 m-4 pb-16 border border-gray-700">
            <h3 className="text-white text-center text-2xl mb-14 tracking-widest">
              {language === "english" ? "Tools" : "Outils"}
            </h3>
            <div className="grid grid-cols-3 gap-y-10 gap-x-4  justify-items-center">
              {skills
                .filter((skill) => skill.skillType === "tools")
                .map((skill) => (
                  <div className="flex flex-col items-center">
                    <img
                      src={skill.skillLogo.url}
                      alt=""
                      className="h-12 m-0 object-contain"
                    />
                    <h3 className="text-gray-300 text-sm mt-6">{skill.name}</h3>
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
