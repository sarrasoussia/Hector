import type { ServicePage } from '../data/services';

interface ServiceDetailPageProps {
  service: ServicePage;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <section className="page-section" id={service.slug}>
      <div className="page-hero">
        <div className="section__container">
          <span className="section__label">Services</span>
          <div className="about-page__breadcrumbs">
            <a href="#/">Home</a>
            <span>/</span>
            <a href="#/services">Services</a>
            <span>/</span>
            <span>{service.title}</span>
          </div>
          <h1 className="page-hero__title">{service.title}</h1>
        </div>
      </div>

      <div className="section section--services">
        <div className="section__container">
          <div className="service-detail">
            <div className="service-detail__intro">
              <span className="section__label">Service Overview</span>
              <h2 className="section__title">{service.title}</h2>
              <p className="about-text about-text--left">{service.shortDescription}</p>
              <p className="about-text about-text--left">{service.intro}</p>
            </div>

            <div className="service-detail__grid">
              <article className="service-detail__card">
                <h3>What This Service Includes</h3>
                <ul className="service-detail__list">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="service-detail__card">
                <h3>Expected Outcomes</h3>
                <ul className="service-detail__list">
                  {service.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="service-detail__back">
              <a href="#/services" className="service-card__link">
                Back to Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
