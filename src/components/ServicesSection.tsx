import { slides } from '../data/slides';

export default function ServicesSection() {
  return (
    <section className="section section--services" id="services">
      <div className="section__container">
        <div className="section__header">
          <span className="section__label">What We Do</span>
          <h2 className="section__title">Services</h2>
          <p className="section__subtitle">
            End-to-end contracting, fit-out, and delivery services tailored for commercial,
            retail, hospitality, and residential spaces across Qatar.
          </p>
        </div>

        <div className="services-grid">
          {slides.map((service) => (
            <article key={service.id} className="service-card">
              <div
                className="service-card__image"
                style={{ backgroundImage: `url(${service.image})` }}
                aria-hidden="true"
              />
              <div className="service-card__content">
                <h3>
                  {service.title}
                  {service.titleLine2 ? ` ${service.titleLine2}` : ''}
                </h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
