import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <nav className=" border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="#hero-section" className="flex items-center">
          <img src="../public/logo.svg" className="h-6 md:h-8" alt="Logo" />
        </a>
        <button
          onClick={() => setIsDisplayed(!isDisplayed)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-slate-500/25 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <MobileMenu isDisplayed={isDisplayed} />
        <div className={`hidden md:w-auto md:block`}>
          <ul className="font-medium flex flex-col gap-4 items-center p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800/75 md:bg-transparent">
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
                href="#projects-section"
                className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact-section"
                className="text-white hover:bg-white hover:text-black p-2 px-4 rounded-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
