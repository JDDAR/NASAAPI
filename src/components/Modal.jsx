import PropTypes from "prop-types";

const Modal = ({ data, toggleModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <span className="modal__content__close" onClick={toggleModal}>
            &times;
          </span>
          <img
            src={data.hdurl}
            alt={data.title || "Imagen de la NASA"}
            className="modal__content__img"
          />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
