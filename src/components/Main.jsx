import PropTypes from "prop-types";

const Main = (props) => {
  const { data } = props;

  return (
    <>
      <section className="BG-Main">
        <div className="BG-Main__Blur"></div>
        <img src={data.hdurl} alt={data.title || "Imagen de la NASA"} />
      </section>
    </>
  );
};

//Definiendo props
Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Main;
