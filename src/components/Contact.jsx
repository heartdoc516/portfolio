import ContactForm from "./ContactForm";
import { Linkedin, GitHub } from "react-feather";
import { useLanguage } from "../../lib/LanguageContext";

const Contact = () => {
  const language = useLanguage();

  return (
    <section className="px-4" id="contact-section">
      <div className="container mx-auto">
        <div className="mt-32 mb-10">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            {language === "english" ? "CONTACT ME" : "CONTACT"}
          </h2>
          <img
            src="../../public/logo.svg"
            alt=""
            className="w-28 mx-auto mb-12"
          />

          <ContactForm />

          <div className="flex flex-row justify-center mb-8">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/francis-plante-71538125a/"
              className="flex flex-col items-center justify-center p-4 m-2 rounded-full bg-slate-700 border border-slate-700 hover:bg-slate-800/50 hover:border-cyan-200 hover:border transition-all ease-out"
            >
              <Linkedin className="text-cyan-500" />
            </a>
            <a
              target="_blank"
              href="https://github.com/heartdoc516"
              className=" flex flex-col items-center justify-center p-4 m-2 rounded-full bg-slate-700 border border-slate-700 hover:bg-slate-800/50 hover:border-cyan-200 hover:border transition-all ease-out"
            >
              <GitHub className="text-cyan-500" />
            </a>
          </div>

          <div className="text-gray-400 text-xs text-center">
            Coded by Me &#9400; 2023
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
