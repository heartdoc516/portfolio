import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
    left: 0,
  },
  closed: {
    opacity: 0,
    left: "100%",
  },
};

const MobileMenu = ({ isDisplayed }) => {
  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.div
          initial={"closed"}
          animate={isDisplayed ? "open" : "closed"}
          variants={variants}
          exit={"closed"}
          className={`absolute top-12 left-0 right-0 w-full md:hidden`}
        >
          <ul className="font-medium flex flex-col gap-4 items-center p-4 md:p-0 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-slate-500/25 md:bg-transparent">
            <li>
              <a
                href="#about-section"
                className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills-section"
                className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
