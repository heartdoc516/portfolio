import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailConfirmModal from "./EmailConfirmModal";
import { useLanguage } from "../../lib/LanguageContext";

const ContactForm = ({ author }) => {
  const form = useRef();
  const language = useLanguage();
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "Rv7Ch98SZS4ZV__su"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setIsOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <EmailConfirmModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        author={author}
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-8 lg:w-1/2 mx-auto mb-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder={
              language === "english" ? "example@gmail.com" : "exemple@gmail.com"
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="email_subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder={
              language === "english"
                ? "Let me know how I can help you"
                : "Laissez moi savoir comment je peux vous aider"
            }
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder={
              language === "english"
                ? "Your questions or comments"
                : "Vos questions et/ou commentaires"
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="block text-center w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-full mx-auto"
        >
          {language === "english" ? "Send Message" : "Envoyer"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
