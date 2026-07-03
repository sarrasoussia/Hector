import { company } from '../data/slides';

export default function ContactSection() {
  return (
    <section className="page-section" id="contact">
      <div className="page-hero">
        <div className="section__container">
          <span className="section__label">Contact</span>
          <h1 className="page-hero__title">Contact Us</h1>
        </div>
      </div>

      <div className="section section--contact">
        <div className="section__container">
          <div className="section__header">
            <span className="section__label">Contact Us</span>
            <h2 className="section__title">Let&apos;s make something new together</h2>
          </div>

          <div className="contact-grid contact-grid--stacked">
            <div className="contact-item">
              <span className="contact-item__label">Contact Us</span>
              <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`}>
                General Manager {company.contact.phone}
              </a>
              <a href={`tel:${company.contact.mobile.replace(/\s/g, '')}`}>
                Operation Manager {company.contact.mobile}
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-item__label">Email Us</span>
              <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
              <a href={`mailto:${company.contact.marketingEmail}`}>{company.contact.marketingEmail}</a>
            </div>

            <div className="contact-item">
              <span className="contact-item__label">Our Address</span>
              <p>{company.contact.address}</p>
            </div>
          </div>

          <p className="contact-legal">{company.legalName}</p>
        </div>
      </div>
    </section>
  );
}
