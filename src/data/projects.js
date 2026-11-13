/**
 * Project portfolio data.
 *
 * Every entry below is a STRUCTURAL PLACEHOLDER. Names, locations and
 * descriptions are intentionally generic, and the photographs are stock
 * placeholders — replace them with real Royal Developers projects.
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

const placeholderDetails = [
  { label: 'Configuration', value: '[e.g. 2 & 3 BHK]' },
  { label: 'Land area', value: '[Area]' },
  { label: 'Units', value: '[Number]' },
];

export const projects = [
  {
    id: 'project-01',
    name: '[Project Name One]',
    location: '[Locality, City]',
    category: 'Villas',
    status: PROJECT_STATUS.COMPLETED,
    cover: photo('villa-pool-terrace', 'Placeholder: contemporary villa with pool terrace'),
    description:
      'Placeholder description. Summarise the development here — its setting, the homes it offers and the thinking behind its planning and design.',
    details: placeholderDetails,
    gallery: [
      photo('int-living-open', 'Placeholder: open-plan living area'),
      photo('int-bedroom', 'Placeholder: bedroom interior'),
      photo('villa-poolside', 'Placeholder: poolside elevation'),
    ],
  },
  {
    id: 'project-02',
    name: '[Project Name Two]',
    location: '[Locality, City]',
    category: 'Residential',
    status: PROJECT_STATUS.COMPLETED,
    cover: photo('ext-dark-apartments', 'Placeholder: modern apartment building'),
    description:
      'Placeholder description. Describe the apartments, the amenities and what makes this address a comfortable, well-connected place to live.',
    details: placeholderDetails,
    gallery: [
      photo('ext-balconies', 'Placeholder: balcony facade detail'),
      photo('int-living-warm', 'Placeholder: furnished living room'),
    ],
  },
  {
    id: 'project-03',
    name: '[Project Name Three]',
    location: '[Locality, City]',
    category: 'Commercial',
    status: PROJECT_STATUS.ONGOING,
    cover: photo('site-cranes', 'Placeholder: building under construction with tower cranes'),
    description:
      'Placeholder description. Outline the scope of this ongoing development, its current stage of construction and what it will offer on completion.',
    details: [
      { label: 'Current stage', value: '[e.g. Structure in progress]' },
      { label: 'Land area', value: '[Area]' },
      { label: 'Expected handover', value: '[Timeline]' },
    ],
    gallery: [
      photo('site-slab', 'Placeholder: slab work in progress'),
      photo('plan-drawings', 'Placeholder: architectural drawings being reviewed'),
      photo('ext-towers', 'Placeholder: commercial towers'),
    ],
  },
  {
    id: 'project-04',
    name: '[Project Name Four]',
    location: '[Locality, City]',
    category: 'Villas',
    status: PROJECT_STATUS.COMPLETED,
    cover: photo('home-timber-facade', 'Placeholder: contemporary home with timber facade'),
    description:
      'Placeholder description. Introduce the homes, their layouts and the quality of materials and finishes used throughout.',
    details: placeholderDetails,
    gallery: [
      photo('home-brick-lawn', 'Placeholder: residence with landscaped lawn'),
      photo('int-lounge', 'Placeholder: bright lounge interior'),
    ],
  },
  {
    id: 'project-05',
    name: '[Project Name Five]',
    location: '[Locality, City]',
    category: 'Residential',
    status: PROJECT_STATUS.ONGOING,
    cover: photo('site-rebar', 'Placeholder: reinforcement work on a construction site'),
    description:
      'Placeholder description. Share progress on this residential development — the work completed so far and the milestones ahead.',
    details: [
      { label: 'Current stage', value: '[e.g. Foundation complete]' },
      { label: 'Configuration', value: '[e.g. 2 & 3 BHK]' },
      { label: 'Expected handover', value: '[Timeline]' },
    ],
    gallery: [
      photo('site-survey', 'Placeholder: site team reviewing foundation work'),
      photo('ext-brick-residences', 'Placeholder: residential block exterior'),
    ],
  },
  {
    id: 'project-06',
    name: '[Project Name Six]',
    location: '[Locality, City]',
    category: 'Residential',
    status: PROJECT_STATUS.COMPLETED,
    cover: photo('villa-white-modern', 'Placeholder: white modern residence'),
    description:
      'Placeholder description. Describe the character of this completed development and the lifestyle it was designed to support.',
    details: placeholderDetails,
    gallery: [
      photo('villa-courtyard', 'Placeholder: courtyard and pool'),
      photo('villa-glass-pavilion', 'Placeholder: glass-fronted living pavilion'),
    ],
  },
];
