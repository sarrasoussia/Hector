import Logo from './Logo';
import { company, navItems } from '../data/slides';

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  return (
    <div className={`menu-overlay ${open ? 'menu-overlay--open' : ''}`} aria-hidden={!open}>
      <div className="menu-overlay__header">
        <Logo variant="light" onClick={onClose} />
        <button
          type="button"
          className="menu-overlay__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <span />
          <span />
        </button>
      </div>

      <nav className="menu-overlay__nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={onClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="menu-overlay__footer">
        <div className="menu-overlay__contact">
          <a href={`tel:${company.contact.phone.replace(/\s/g, '')}`}>
            {company.contact.phone}
          </a>
          <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a>
          <span>{company.contact.address}</span>
        </div>
        <div className="menu-overlay__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
