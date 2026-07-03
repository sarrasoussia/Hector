import { company } from '../data/slides';

export default function AboutSection() {
  return (
    <section className="section section--about" id="about">
      <div className="section__container section__container--narrow">
        <div className="section__header">
          <span className="section__label">About Us</span>
          <h2 className="section__title">{company.tagline}</h2>
        </div>
        <p className="about-text">{company.about}</p>
      </div>
    </section>
  );
}
