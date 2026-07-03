export interface ServicePage {
  slug: 'fcu-maintenance' | 'duct-maintenance' | 'ecology-unit-maintenance' | 'split-unit-services';
  title: string;
  shortDescription: string;
  intro: string;
  includes: string[];
  outcomes: string[];
}

export const servicePages: ServicePage[] = [
  {
    slug: 'fcu-maintenance',
    title: 'FCU Maintenance',
    shortDescription:
      'Complete inspection, servicing, and maintenance of FCU systems to ensure efficient cooling, improved air quality, and reliable performance.',
    intro:
      'Our FCU maintenance service is focused on keeping fan coil units operating smoothly across commercial and residential projects. We inspect, service, and optimize unit performance to reduce breakdowns and maintain dependable indoor comfort.',
    includes: [
      'Inspection of fan coil unit components and operating condition',
      'Cleaning of filters, coils, drain lines, and internal assemblies',
      'Checking airflow, cooling output, and general system efficiency',
      'Preventive servicing to reduce wear and avoid unexpected downtime',
    ],
    outcomes: [
      'Improved cooling performance and indoor air quality',
      'Lower risk of unexpected equipment failure',
      'More reliable long-term operation with planned maintenance',
    ],
  },
  {
    slug: 'duct-maintenance',
    title: 'Duct Maintenance',
    shortDescription:
      'Professional duct cleaning and maintenance services to enhance airflow, reduce energy loss, and maintain a healthy indoor environment.',
    intro:
      'Our duct maintenance service helps improve the performance of air distribution systems by cleaning, checking, and maintaining duct routes and connected components. The goal is cleaner airflow, healthier interiors, and better system efficiency.',
    includes: [
      'Cleaning of duct pathways and accessible internal surfaces',
      'Inspection for blockage, dust buildup, and airflow restrictions',
      'Maintenance checks that help reduce leakage and energy waste',
      'Support for healthier indoor conditions across occupied spaces',
    ],
    outcomes: [
      'Enhanced airflow consistency throughout the property',
      'Reduced energy loss from neglected duct systems',
      'Cleaner and healthier indoor air circulation',
    ],
  },
  {
    slug: 'ecology-unit-maintenance',
    title: 'Ecology Unit Maintenance',
    shortDescription:
      'Preventive and corrective maintenance solutions designed to keep ecology and ventilation units operating safely and efficiently.',
    intro:
      'Our ecology unit maintenance service covers the routine care and corrective support needed to keep ventilation and ecology systems safe, compliant, and efficient. We focus on operational reliability and continued performance in demanding environments.',
    includes: [
      'Preventive maintenance planning for ecology and ventilation units',
      'Corrective servicing for identified faults or performance issues',
      'Inspection of operating safety, condition, and functional efficiency',
      'Performance support to help systems run consistently over time',
    ],
    outcomes: [
      'Safer and more dependable ventilation system operation',
      'Reduced disruption through early issue detection',
      'Better overall efficiency in daily system performance',
    ],
  },
  {
    slug: 'split-unit-services',
    title: 'Split Unit Services',
    shortDescription:
      'Complete servicing and maintenance of split AC units to ensure optimal performance, energy efficiency, and long-term reliability.',
    intro:
      'Our split unit service is designed to keep air-conditioning units performing at their best through complete servicing, cleaning, and maintenance checks. We help extend equipment life while supporting comfort and energy efficiency.',
    includes: [
      'Complete servicing of split AC indoor and outdoor units',
      'Cleaning and checking components that affect cooling efficiency',
      'Maintenance checks to support safe and stable performance',
      'Routine servicing that helps preserve long-term equipment condition',
    ],
    outcomes: [
      'Optimized unit performance and cooling response',
      'Improved energy efficiency through regular servicing',
      'Longer-lasting equipment with fewer preventable issues',
    ],
  },
];

export function getServicePageBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
