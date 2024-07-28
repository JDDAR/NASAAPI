//ICONS
import { IoOpen, IoRefreshCircleSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";

const Content = ({ data, fetchAPIData }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log("Activando Modal");
  };

  return (
    <>
      <div className="content-Img">
        <img src={data.hdurl} alt={data.title || "Imangen the NASA"} />
      </div>
      <section className="content-info container">
        <article className="content-info__left">
          <div className="content-info__left__text">
            <div className="content-info__left__icons">
              <IoRefreshCircleSharp
                onClick={fetchAPIData}
                className="content-info__left__icons__icon"
              />
              <IoOpen
                onClick={toggleModal}
                className="content-info__left__icons__icon"
              />
            </div>
            <p>{data?.title || "Imagen de la nasa "}</p>
            <p>{data?.copyright || "Imagen de la NASA"}</p>
          </div>
        </article>
        <article className="content-info__right">
          <section className="content-info__right__contentText">
            <h2>{data?.title || "No title Available"}</h2>
            <h3>{data?.date}</h3>
            <p>{data?.explanation || "No Explication Avaible"} </p>
          </section>
        </article>
      </section>
      <Modal showModal={showModal} toggleModal={toggleModal}>
        <img
          src={data.hdurl}
          alt={data.title || "Imagen de la NASA"}
          className="modal__content__img"
        />
      </Modal>{" "}
    </>
  );
};

// Definir las PropTypes
Content.propTypes = {
  data: PropTypes.shape({
    copyright: PropTypes.string,
    date: PropTypes.string,
    hdurl: PropTypes.string,
    title: PropTypes.string,
    explanation: PropTypes.string,
  }).isRequired,
  fetchAPIData: PropTypes.func.isRequired,
};

export default Content;
