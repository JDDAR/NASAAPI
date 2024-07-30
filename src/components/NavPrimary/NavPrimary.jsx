//iconos
import { IoLogoOctocat, IoLogoTwitter, IoLogoDribbble } from "react-icons/io";
const NavPrimary = () => {
  return (
    <section className="navPrimary">
      <article className="navPrimary__container">
        <a
          className="navPrimary__volver"
          href="https://jddar.github.io/MyProjects/"
        >
          {" "}
          Volver a Proyectos{" "}
        </a>
        <a href="https://github.com/JDDAR/NASAAPI">
          <IoLogoOctocat />
        </a>
        <a href="https://x.com/Jdaniel106" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://dribbble.com/shots/24580794-BL-LOGIN" target="_blank">
          <IoLogoDribbble />
        </a>
      </article>
    </section>
  );
};

export default NavPrimary;
