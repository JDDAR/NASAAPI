import { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ showModal, toggleModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        toggleModal();
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, toggleModal]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <>
      <div
        className={`modal ${showModal ? "modal--show" : "modal--hide "}`}
        onClick={toggleModal}
      >
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <span className="modal__content__close" onClick={toggleModal}>
            &times;
          </span>
          {children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export default Modal;
