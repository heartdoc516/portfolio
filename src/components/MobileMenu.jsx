import { motion, AnimatePresence } from "framer-motion";

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
  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.ul
          initial={"closed"}
          animate={isDisplayed ? "open" : "closed"}
          variants={ulVariants}
          exit={"closed"}
          className={`absolute top-12 left-0 right-0 w-full md:hidden font-medium flex flex-col gap-4 items-center p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-slate-700/25 md:bg-transparent`}
        >
          <motion.li variants={liVariants}>
            <a
              href="#about-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              About
            </a>
          </motion.li>
          <motion.li variants={liVariants}>
            <a
              href="#skills-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              Skills
            </a>
          </motion.li>
          <motion.li variants={liVariants}>
            <a
              href="#projects-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              Projects
            </a>
          </motion.li>

          <motion.li variants={liVariants}>
            <a
              href="#contact-section"
              className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
            >
              Contact
            </a>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
