export interface ProjectWork {
  id: string;
  name: string;
  location: string;
  scope: string;
  image: string;
}

export const projectWorks: ProjectWork[] = [
  {
    id: 'joy-general',
    name: 'Joy General Cafe',
    location: 'The Pearl, Qatar',
    scope: 'Full exterior fit-out, signage & branding installation',
    image: '/img/projects-work/joy-general-cafe.jpeg',
  },
  {
    id: 'top-cars',
    name: 'Top Cars Showroom',
    location: 'C-View Residence, Lusail',
    scope: 'Full fit-out work & furniture supply',
    image: '/img/projects-work/top-cars-showroom.jpeg',
  },
  {
    id: 'alhaji',
    name: 'Alhaji Legal Consultant & Attorneys',
    location: 'Al Saad, Doha',
    scope: 'Full fit-out work & custom signage',
    image: '/img/projects-work/alhaji-legal-office.jpeg',
  },
];
