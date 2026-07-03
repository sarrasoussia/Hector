import { servicePages } from '../data/services';

export default function ServicesSection() {
  return (
    <section className="page-section" id="services">
      <div className="page-hero">
        <div className="section__container">
          <span className="section__label">Services</span>
          <h1 className="page-hero__title">Our Services</h1>
        </div>
      </div>

      <div className="section section--services">
        <div className="section__container">
        <div className="section__header">
          <span className="section__label">Services</span>
          <h2 className="section__title">Our Services</h2>
          <p className="section__subtitle">
            Specialized maintenance services designed to keep cooling and ventilation systems
            operating efficiently, safely, and reliably.
          </p>
        </div>

        <div className="services-grid">
          {servicePages.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <a href={`#/services/${service.slug}`} className="service-card__link">
                  View Service
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
