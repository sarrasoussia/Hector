export interface ProjectWork {
  id: string;
  name: string;
  location?: string;
  scope?: string;
  image?: string;
  legacyUrl?: string;
}

const projectImages = {
  joeGeneral: '/img/projects-work/joy-general-cafe.jpeg',
  mortys: '/img/projects-work/mortys.jpg',
  elysian: '/img/projects-work/elysian.jpg',
  hilistoneLusail: '/img/projects-work/hilistone-lusail.jpg',
  topCarShowroom: '/img/projects-work/top-cars-showroom.jpeg',
  watr: '/img/projects-work/watr.jpeg',
  hilistoneOqHotel: '/img/projects-work/hilistone-oq-hotel.jpg',
  alHajji: '/img/projects-work/alhaji-legal-office.jpeg',
  hamdaSalon: '/img/projects-work/hamda-salon.jpg',
  cottoByBonds: '/img/partners/cotto-by-bonds.jpeg',
  oppenheimerSalon: '/img/projects-work/oppenheimer-salon.jpg',
  msMsVilla: '/img/projects-work/ms-ms-villa.jpg',
  mrabVilla: '/img/projects-work/mrab-villa.jpg',
  brudoreQa: '/img/projects-work/brudore-qa.jpg',
  hundredCafe: '/img/projects-work/hundred-cafe.jpg',
  wkSalon: '/img/projects-work/wk-salon.jpg',
  retroBites: '/img/projects-work/retro-bites.jpg',
} as const;

export const projectWorks: ProjectWork[] = [
  {
    id: 'joe-general',
    name: 'Joe General',
    location: 'Porto Arabia',
    scope: 'Full exterior fit-out, signage & branding installation',
    image: projectImages.joeGeneral,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/joe-general-1',
  },
  {
    id: 'mortys',
    name: "Morty's",
    location: 'Al Rayan',
    image: projectImages.mortys,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/mortys-2',
  },
  {
    id: 'elysian',
    name: 'Elysian',
    location: 'Al Hazem Mall',
    image: projectImages.elysian,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/elysian-1',
  },
  {
    id: 'hilistone-lusail',
    name: 'Hilistone',
    location: 'Lusail',
    image: projectImages.hilistoneLusail,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/hilistone-1',
  },
  {
    id: 'top-car-showroom',
    name: 'Top Car Showroom',
    location: 'Lusail',
    scope: 'Full fit-out work & furniture supply',
    image: projectImages.topCarShowroom,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/top-car-showroom-1',
  },
  {
    id: 'watr',
    name: 'Watr',
    location: 'OQ Hotel',
    image: projectImages.watr,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/watr',
  },
  {
    id: 'hilistone-oq-hotel',
    name: 'Hilistone',
    location: 'OQ Hotel',
    image: projectImages.hilistoneOqHotel,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/hilistone',
  },
  {
    id: 'al-hajji-legal',
    name: 'AL Hajji Legal Consultant and Attorneys',
    location: 'Al Sad',
    scope: 'Full fit-out work & custom signage',
    image: projectImages.alHajji,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/al-hajji-legal-consultant-and-attorneys-4',
  },
  {
    id: 'hamda-salon',
    name: 'Hamda Salon',
    location: 'Al Khisa',
    image: projectImages.hamdaSalon,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/hamda-salon',
  },
  {
    id: 'cotto-by-bonds',
    name: 'Cotto by Bonds',
    location: 'Porto Arabia',
    image: projectImages.cottoByBonds,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/cotto-by-bonds',
  },
  {
    id: 'oppenheimer-salon',
    name: 'Oppenheimer Salon',
    location: 'Lusail',
    image: projectImages.oppenheimerSalon,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/oppenheimer-salon-1',
  },
  {
    id: 'ms-ms-villa',
    name: 'MS M.S Villa',
    location: 'Al Wakra',
    image: projectImages.msMsVilla,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/ms-ms-villa',
  },
  {
    id: 'mrab-villa',
    name: 'Mr.A.b Villa',
    location: 'Al Wakra',
    image: projectImages.mrabVilla,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/mrab-villa-1',
  },
  {
    id: 'brudore-qa',
    name: 'Brudore.qa',
    location: 'Lusail',
    image: projectImages.brudoreQa,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/brudoreqa-1',
  },
  {
    id: 'hundred-cafe',
    name: 'Hundred Cafe',
    location: 'Gewan Island',
    image: projectImages.hundredCafe,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/hundred-cafe',
  },
  {
    id: 'wk-salon',
    name: 'WK Salon',
    location: 'Ritz Carlton',
    image: projectImages.wkSalon,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/wk-salon',
  },
  {
    id: 'retro-bites',
    name: 'Retro Bites',
    image: projectImages.retroBites,
    legacyUrl: 'https://iqtechsolutions.com/hectorqtr/retro-bites',
  },
];
