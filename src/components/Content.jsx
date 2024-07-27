import PropTypes from "prop-types";

const Content = (props) => {
  const { data } = props;
  return (
    <>
      <div className="content-Img">
        <img src={data.hdurl} alt={data.title || "Imangen the NASA"} />
      </div>
      <section className="content-info container">
        <article className="content-info__left">
          <div className="content-info__left__text">
            <p>
              This NASA/ESA Hubble Space Telescope image features the majestic
              spiral galaxy NGC 3430.
            </p>
            <p>ESA/Hubble & NASA, C. Kilpatrick</p>
          </div>
        </article>
        <article className="content-info__right">
          <section className="content-info__right__contentText">
            <h2>{data?.title || "No title Available"}</h2>
            <p>{data?.explanation || "No Explication Avaible"} </p>
          </section>
        </article>
      </section>
    </>
  );
};

// Definir las PropTypes
Content.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string,
    title: PropTypes.string,
    explanation: PropTypes.string,
  }),
};

export default Content;
