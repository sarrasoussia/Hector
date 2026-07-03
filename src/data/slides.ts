export interface Slide {
  id: number;
  title: string;
  titleLine2?: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: string;
}

export const company = {
  name: 'HECTOR Qatar',
  legalName: 'HECTOR Trading & Contracting W.L.L',
  tagline: 'Your vision, our expertise.',
  about:
    'A Qatar-based company offering turnkey fit-out projects, furniture supply, and civil construction. We transform spaces into inspiring environments with quality craftsmanship and attention to detail.',
  contact: {
    address: 'Al naser tower A west bay floor number: 17, Room No: 3, Doha, Qatar',
    phone: '(+974) 70747672',
    fax: '(+974) 4451 2254',
    mobile: '7117 2039',
    email: 'info@hectorqatar.com',
    marketingEmail: 'marketing@hectorqatar.com',
  },
};

export const slides: Slide[] = [
  {
    id: 1,
    title: 'Turnkey Interior',
    titleLine2: 'Fit-Out',
    description:
      'End-to-end fit-out solutions for retail, F&B, hospitality, offices, and commercial spaces — from concept to handover.',
    cta: 'Explore Fit-Out',
    ctaLink: '#/services',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  },
  {
    id: 2,
    title: 'Civil & Structural',
    titleLine2: 'Construction',
    description:
      'Trusted civil and structural contracting across Qatar — built safely, on time, on budget, with no surprises.',
    cta: 'Explore Construction',
    ctaLink: '#/services',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  },
  {
    id: 3,
    title: 'Furniture Supply',
    titleLine2: '& Installation',
    description:
      'Premium furniture sourcing and professional installation for villas, offices, retail, and hospitality projects.',
    cta: 'Explore Furniture',
    ctaLink: '#/services',
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80',
  },
  {
    id: 4,
    title: 'Renovation',
    titleLine2: '& MEP',
    description:
      'Complete renovation and MEP solutions that modernize spaces while maintaining operational efficiency.',
    cta: 'Explore Renovation',
    ctaLink: '#/services',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80',
  },
  {
    id: 5,
    title: 'Custom Joinery',
    titleLine2: '& Design',
    description:
      'Bespoke joinery and tailored design solutions crafted with precision to bring your vision to life.',
    cta: 'View Our Work',
    ctaLink: '#/projects',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  },
];

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Services', href: '#/services' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Clients', href: '#/clients' },
  { label: 'Contact', href: '#/contact' },
];

