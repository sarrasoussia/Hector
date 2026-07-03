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
  mortys: new URL('../../img/mortys/1773485016.jpg', import.meta.url).href,
  elysian: new URL('../../img/elysian/1773484753.jpg', import.meta.url).href,
  hilistoneLusail: new URL('../../img/hilistone/1773484230.jpg', import.meta.url).href,
  topCarShowroom: new URL('../../img/topcar showroom/1773484301.jpg', import.meta.url).href,
  watr: new URL('../../img/watr/WhatsApp Image 2026-07-03 at 20.59.18.jpeg', import.meta.url).href,
  hilistoneOqHotel: new URL('../../img/hilistone/1773484487.jpg', import.meta.url).href,
  alHajji: new URL('../../img/al hajji/1773482692.jpg', import.meta.url).href,
  hamdaSalon: new URL('../../img/hamada salon/1773483021.jpg', import.meta.url).href,
  cottoByBonds: '/img/partners/cotto-by-bonds.jpeg',
  oppenheimerSalon: new URL('../../img/oppenheimer salon/1773482473.jpg', import.meta.url).href,
  msMsVilla: new URL('../../img/ms villa/1773482175.jpg', import.meta.url).href,
  mrabVilla: new URL('../../img/mrab villa/1773481872.jpg', import.meta.url).href,
  brudoreQa: new URL('../../img/brudore.qa/1773481692.jpg', import.meta.url).href,
  hundredCafe: new URL('../../img/hundredCoffee/DSC03685.JPG', import.meta.url).href,
  wkSalon: new URL('../../img/WK Salon/1771827587.jpg', import.meta.url).href,
  retroBites: new URL('../../img/retro bites/1771827012.jpg', import.meta.url).href,
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
