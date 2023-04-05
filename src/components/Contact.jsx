import { Linkedin, GitHub, Mail } from "react-feather";

const Contact = () => {
  return (
    <section className="px-4" id="contact-section">
      <div className="container mx-auto">
        <div className="my-32">
          <h2 className="text-white text-3xl font-bold tracking-widest mb-10 text-center">
            CONTACT ME
          </h2>
          <img
            src="../../public/logo.svg"
            alt=""
            className="w-28 mx-auto mb-12"
          />
          <div className="flex flex-row justify-center gap-8">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/francis-plante-71538125a/"
              className=" flex flex-col items-center justify-center p-4 rounded-full bg-slate-700 border border-slate-700 hover:bg-slate-800/50 hover:border-cyan-200 hover:border transition-all ease-out"
            >
              <Linkedin className="text-cyan-500" />
            </a>
            <a
              target="_blank"
              href="https://github.com/heartdoc516"
              className=" flex flex-col items-center justify-center p-4 rounded-full bg-slate-700 border border-slate-700 hover:bg-slate-800/50 hover:border-cyan-200 hover:border transition-all ease-out"
            >
              <GitHub className="text-cyan-500" />
            </a>
          </div>
          <div className="text-gray-400 text-center mt-6">
            francis.plante.855@gmail.com
          </div>
          <div className="text-gray-400 text-center my-2">
            Coded by Me &#9400; 2023
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
