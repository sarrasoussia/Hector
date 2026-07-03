import { partners } from '../data/partners';

export default function PartnersSection() {
  return (
    <section className="section section--partners" id="partners">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">Trusted By</span>
          <h2 className="section__title">Our Partners & Clients</h2>
          <p className="section__subtitle">
            Brands we have proudly delivered fit-out, construction, and furniture solutions for across Qatar.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <article key={partner.id} className="partner-card">
              <div className="partner-card__image-wrap">
                <img src={partner.image} alt={partner.name} loading="lazy" />
              </div>
              <div className="partner-card__info">
                <h3>{partner.name}</h3>
                <span>{partner.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
