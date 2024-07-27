const Content = () => {
  return (
    <>
      <div className="content-Img">
        <img
          src="https://science.nasa.gov/wp-content/uploads/2024/07/hubble-ngc3430-potw2430a.jpg?w=2048&format=webp"
          alt=""
        />
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
            <h2>Hubble Images a Classic Spiral</h2>
            <p>
              This NASA/ESA Hubble Space Telescope image treats viewers to a
              wonderfully detailed snapshot of the spiral galaxy NGC 3430 that
              lies 100 million light-years from Earth in the constellation Leo
              Minor. Several other galaxies, located relatively nearby to this
              one, are just beyond the frame of this image; one is close enough
              that gravitational interaction is driving some star formation in
              NGC 3430 — visible as bright-blue patches near to but outside of
              the galaxy’s main spiral structure. This fine example of a
              galactic spiral holds a bright core from which a pinwheel array of
              arms appears to radiate outward. Dark dust lanes and bright
              star-forming regions help define these spiral arms. NGC 3430’s
              distinct shape may be one reason why astronomer Edwin Hubble used
              to it to help define his classification of galaxies. Namesake of
              the Hubble Space Telescope, Edwin Hubble authored a paper in 1926
              that outlined the classification of some four hundred galaxies by
              their appearance — as either spiral, barred spiral, lenticular,
              elliptical, or irregular. This straightforward typology proved
              extremely influential, and the detailed schemes astronomers use
              today are still based on Edwin Hubble’s work. NGC 3430 itself is a
              spiral lacking a central bar with open, clearly defined arms —
              classified today as an SAc galaxy.
            </p>
          </section>
        </article>
      </section>
    </>
  );
};
export default Content;
