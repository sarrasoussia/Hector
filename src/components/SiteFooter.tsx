import { company } from '../data/slides';
import { servicePages } from '../data/services';

const usefulLinks = [
  { label: 'About Us', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Clients', href: '#/clients' },
  { label: 'Contact Us', href: '#/contact' },
];

export default function SiteFooter() {
  return (
    <footer className="about-footer">
      <div className="section__container">
        <div className="about-footer__grid">
          <div className="about-footer__column">
            <h3>About Us</h3>
            <p>
              These are the keys to HECTOR QATAR&apos;s success. HECTOR QATAR is one of the most
              respected civil &amp; structural construction organizations. No project is too
              challenging or difficult; too big or small. Our goals for every project are the
              same: build it safely, on time, on budget, and with no unexpectedness.
            </p>
          </div>

          <div className="about-footer__column">
            <h3>Useful Links</h3>
            <ul>
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-footer__column">
            <h3>Services</h3>
            <ul>
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <a href={`#/services/${service.slug}`}>{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-footer__column">
            <h3>Contact</h3>
            <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
            <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`}>
              General Manager {company.contact.phone}
            </a>
          </div>
        </div>

        <div className="about-footer__bottom">
          <span>Copyright ©2025. All rights reserved to Hector</span>
          <span>Powered By iQ-Tech Solutions</span>
        </div>
      </div>
    </footer>
  );
}
