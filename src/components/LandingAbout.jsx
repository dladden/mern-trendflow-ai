import LandingTitle from './LandingTitle';
//This component is set up right after the Hero to give a little description of trendFlow
const LandingAbout = () => {
  return (
    <section className="section section-center" id="about">
      <LandingTitle title="about" subTitle="us" />

      <div className="section-center about-center">
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default LandingAbout;
