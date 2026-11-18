/**
 * Gallery data.
 *
 * Add a photograph by dropping the file into src/assets/photos (see
 * src/data/images.js) and adding an entry below. Filters are generated
 * automatically from the categories in use.

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
  { id: 'g-aero-city', category: C.DEVELOPMENTS, caption: 'NVB Aero City, Rajahmundry', image: photo('aero-city-gate', 'Entrance gate of NVB Aero City, Rajahmundry') },
  { id: 'g-aero-city-brochure', category: C.DEVELOPMENTS, caption: 'NVB Aero City brochure', image: photo('aero-city-brochure', 'NVB Aero City brochure — opposite Airport, Rajahmundry') },
];
