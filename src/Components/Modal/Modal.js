function Modal({ children, toggleModal, customClassMainContainer }) {
  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content relative flex">
        <div className={`main-container ${customClassMainContainer}`}>
          {children}
          <button
            className="close-modal text-3xl text-[#bdbdbd]"
            onClick={toggleModal}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
