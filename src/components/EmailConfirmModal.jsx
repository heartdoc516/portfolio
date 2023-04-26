import Modal from "react-modal";

Modal.setAppElement("#confirm-modal");

const EmailConfirmModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className="p-10 w-full md:w-1/3 mx-auto mt-80 bg-slate-800 rounded-lg text-center text-lg font-semibold tracking-wide"
      style={{
        overlay: {
          backgroundColor: "#11182750",
        },
      }}
    >
      <div className="text-white mb-8">
        Email sent! I'll get back to you soon!
      </div>
      <img src="../../public/pixel-me.png" alt="" className="mx-auto w-40" />
      <button
        onClick={closeModal}
        className="block text-center mt-4 w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-full mx-auto"
      >
        Got It
      </button>
    </Modal>
  );
};

export default EmailConfirmModal;
