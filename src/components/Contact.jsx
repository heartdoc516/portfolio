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
            <a className=" flex flex-col items-center justify-center p-4 rounded-full bg-slate-700">
              <Linkedin className="text-cyan-500" />
            </a>
            <a className=" flex flex-col items-center justify-center p-4 rounded-full bg-slate-700">
              <GitHub className="text-cyan-500" />
            </a>
            <a className=" flex flex-col items-center justify-center p-4 rounded-full bg-slate-700">
              <Mail className="text-cyan-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
