import { motion } from "framer-motion";
import { useLanguage } from "../../lib/LanguageContext";

const Hero = ({ author }) => {
  const language = useLanguage();
  return (
    <section className="flex justify-center px-4" id="hero-section">
      <div className="text-center my-32">
        <h1 className="text-white">
          <motion.div
            initial={{ opacity: 0, x: "-1000px" }}
            animate={{ opacity: [0, 0.2, 0.3, 0.4, 1], x: "0" }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ one: true }}
          >
            <span className="font-thin text-5xl md:text-6xl">Francis </span>
            <span className="font-extrabold text-transparent text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-600">
              PLANTE
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "1000px" }}
            animate={{ opacity: [0, 0.2, 0.3, 0.4, 1], x: "0" }}
            transition={{ delay: 1.2, duration: 0.5 }}
            viewport={{ one: true }}
            className="mb-10 text-2xl font-thin tracking-widest"
          >
            {language === "english" ? "Web Developer" : "Développeur Web"}
          </motion.div>
        </h1>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          target="_blank"
          href={
            language === "english"
              ? author.resumeEnglish.url
              : author.resumeFrench.url
          }
          download
          type="button"
          className="text-white bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800 rounded-full"
        >
          {language === "english" ? "Resume" : "C.V."}
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          href="#contact-section"
          type="button"
          className="text-white bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800 rounded-full"
        >
          CONTACT
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
