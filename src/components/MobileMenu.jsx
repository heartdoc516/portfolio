import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, useLanguageDispatch } from "../../lib/LanguageContext";

const ulVariants = {
  open: {
    opacity: 1,
    left: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  closed: {
    opacity: 0,
    left: "100%",
  },
};

const liVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const MobileMenu = ({ isDisplayed }) => {
  const dispatch = useLanguageDispatch();
  const language = useLanguage();

  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.ul
          initial={"closed"}
          animate={isDisplayed ? "open" : "closed"}
          variants={ulVariants}
          exit={"closed"}
          className={`w-full md:hidden font-medium flex flex-col items-center p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-slate-700/25 md:bg-transparent`}
        >
          <motion.li variants={liVariants} className="my-2">
            <a
              href="#about-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              {language === "english" ? "About" : "À Propos"}
            </a>
          </motion.li>
          <motion.li variants={liVariants} className="my-2">
            <a
              href="#skills-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              {language === "english" ? "Skills" : "Compétences"}
            </a>
          </motion.li>
          <motion.li variants={liVariants} className="my-2">
            <a
              href="#projects-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              {language === "english" ? "Projects" : "Projets"}
            </a>
          </motion.li>

          <motion.li variants={liVariants} className="my-2">
            <a
              href="#contact-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              Contact
            </a>
          </motion.li>
          <motion.li variants={liVariants} className="my-2">
            <button
              className="text-gray-400 mr-2 hover:text-gray-600"
              onClick={() => dispatch({ type: "english" })}
            >
              En
            </button>
            <span className="text-gray-600">|</span>
            <button
              className="text-gray-400 ml-2 hover:text-gray-600"
              onClick={() => dispatch({ type: "french" })}
            >
              Fr
            </button>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
