/**
 * Project portfolio data.
 *
 * Fields
 *   id           unique slug
 *   name         project name
 *   location     area / city
 *   category     e.g. 'Residential', 'Villas', 'Commercial', 'Plotted Development'
 *   status       PROJECT_STATUS.COMPLETED | PROJECT_STATUS.ONGOING
 *   cover        main photograph  -> photo('file-name', 'alt text')
 *   description  short summary
 *   details      optional list of { label, value } facts shown in the detail view
 *   gallery      additional photographs
 *
 * Photos live in src/assets/photos — see src/data/images.js.
 */
import { photo } from './images';

export const PROJECT_STATUS = {
  COMPLETED: 'Completed',
  ONGOING: 'Ongoing',
};

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: PROJECT_STATUS.COMPLETED, label: 'Completed' },
  { id: PROJECT_STATUS.ONGOING, label: 'Ongoing' },
];

export const projects = [
  {
    id: 'nvb-aero-city',
    name: 'NVB Aero City',
    location: 'Madhurapudi, Opp. Airport, Rajahmundry',
    category: 'Plotted Development',
    status: PROJECT_STATUS.ONGOING,
    cover: photo('aero-city-gate', 'Entrance gate of NVB Aero City, Rajahmundry'),
    description:
      'A RUDA-approved gated layout opposite Rajahmundry Airport with 580 plots — open plots, 2 BHK homes and 3 BHK villas. Includes CC roads, drainage, street lighting, drinking water connections, a children’s park and 24/7 security.',
    details: [
      { label: 'Total plots', value: '580' },
      { label: 'Homes', value: '3 BHK villas, 2 BHK houses, open plots' },
      { label: 'Plot sizes', value: '167, 183 & 220 sq. yards' },
      { label: 'Approval', value: 'RUDA approved' },
    ],
    gallery: [photo('aero-city-brochure', 'NVB Aero City brochure — opposite Airport, Rajahmundry')],
  },
];
