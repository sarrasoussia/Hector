import { company } from '../data/slides';

export default function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="section__container section__container--narrow">
        <div className="section__header">
          <span className="section__label">Get In Touch</span>
          <h2 className="section__title">Contact Us</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-item__label">Address</span>
            <p>{company.contact.address}</p>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">Phone</span>
            <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`}>
              {company.contact.phone}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">Mobile</span>
            <a href={`tel:${company.contact.mobile.replace(/\s/g, '')}`}>
              {company.contact.mobile}
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-item__label">Email</span>
            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
          </div>
        </div>
        <p className="contact-legal">{company.legalName}</p>
      </div>
    </section>
  );
}
