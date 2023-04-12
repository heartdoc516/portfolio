import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

const About = ({ author }) => {
  const language = useLanguage();

  return (
    <section
      className="relative px-4 bg-transparent md:bg-gradient-to-r from-slate-950/50 to-slate-800/0"
      id="about-section"
    >
      <div className="flex flex-col md:flex-row gap-10 justify-center container mx-auto  mb-32 py-10">
        <motion.div
          initial={{ opacity: 0, x: "-300px" }}
          animate={{ opacity: [0, 0.2, 0.3, 0.4, 1], x: 0 }}
          transition={{ delay: 1.5 }}
          className="relative w-full mx-auto px-10 md:px-0 md:w-1/4"
        >
          <img src="../public/avatar.svg" alt="" className="mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "300px" }}
          animate={{ opacity: [0, 0.2, 0.3, 0.4, 1], x: 0 }}
          transition={{ delay: 2 }}
          className="w-full md:w-1/2 mx-auto"
        >
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            {language === "english" ? "WHO AM I" : "QUI JE SUIS"}
          </h2>
          <p className="text-gray-400 leading-7 text-lg text-center md:text-left">
            {language === "english" ? author.bio : author.bioFrench}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
