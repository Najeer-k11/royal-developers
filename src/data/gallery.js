/**
 * Gallery data.
 *
 * Add a photograph by dropping the file into src/assets/photos (see
 * src/data/images.js) and adding an entry below. Filters are generated
 * automatically from the categories in use.
 *
 * NOTE: current images are stock placeholders, not Royal Developers properties.
 */
import { photo } from './images';

export const GALLERY_CATEGORY = {
  COMPLETED: 'Completed Buildings',
  EXTERIOR: 'Exterior Architecture',
  INTERIOR: 'Interior Spaces',
  CONSTRUCTION: 'Construction Progress',
  DEVELOPMENTS: 'Property Developments',
  SITE: 'Site Photographs',
};

const C = GALLERY_CATEGORY;

export const galleryItems = [
  { id: 'g-01', category: C.EXTERIOR, caption: 'Facade study', image: photo('ext-dark-residences', 'Dark-clad residential facade') },
  { id: 'g-02', category: C.COMPLETED, caption: 'Completed residence', image: photo('villa-white-pool', 'Completed modern residence with pool') },
  { id: 'g-03', category: C.INTERIOR, caption: 'Living area', image: photo('int-living-warm', 'Warm furnished living room') },
  { id: 'g-04', category: C.CONSTRUCTION, caption: 'Structure in progress', image: photo('site-cranes', 'Tower cranes over a building under construction') },
  { id: 'g-05', category: C.DEVELOPMENTS, caption: 'Residential development', image: photo('ext-brick-residences', 'Residential blocks at sunset') },
  { id: 'g-06', category: C.EXTERIOR, caption: 'Elevation detail', image: photo('ext-white-tower', 'White residential tower') },
  { id: 'g-07', category: C.INTERIOR, caption: 'Open-plan living', image: photo('int-living-open', 'Open-plan living and kitchen') },
  { id: 'g-08', category: C.SITE, caption: 'Site review', image: photo('site-survey', 'Site team reviewing foundation work') },
  { id: 'g-09', category: C.COMPLETED, caption: 'Completed villa', image: photo('villa-pool-terrace', 'Completed villa with pool terrace') },
  { id: 'g-10', category: C.CONSTRUCTION, caption: 'Reinforcement work', image: photo('site-rebar', 'Workers fixing steel reinforcement') },
  { id: 'g-11', category: C.EXTERIOR, caption: 'Balcony facade', image: photo('ext-balconies', 'Apartment facade with balconies') },
  { id: 'g-12', category: C.INTERIOR, caption: 'Bedroom', image: photo('int-bedroom', 'Calm bedroom interior') },
  { id: 'g-13', category: C.DEVELOPMENTS, caption: 'Apartment development', image: photo('ext-slate-block', 'Apartment block against blue sky') },
  { id: 'g-14', category: C.SITE, caption: 'Planning and drawings', image: photo('plan-drawings', 'Architectural drawings being reviewed') },
  { id: 'g-15', category: C.COMPLETED, caption: 'Completed home', image: photo('home-brick-lawn', 'Completed home with landscaped lawn') },
  { id: 'g-16', category: C.CONSTRUCTION, caption: 'Slab work', image: photo('site-slab', 'Slab work in progress seen from above') },
  { id: 'g-17', category: C.EXTERIOR, caption: 'Poolside elevation', image: photo('villa-poolside', 'Poolside elevation of a residence') },
  { id: 'g-18', category: C.INTERIOR, caption: 'Lounge', image: photo('int-lounge', 'Bright lounge with large windows') },
];
