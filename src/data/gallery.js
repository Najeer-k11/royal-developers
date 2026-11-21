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
  { id: 'g-aero-city-entrance', category: C.DEVELOPMENTS, caption: 'NVB Aero City entrance gate (render)', image: photo('aero-city-entrance', 'Rendering of the NVB’s Aero City entrance arch and gate') },
  { id: 'g-aero-city-aerial', category: C.DEVELOPMENTS, caption: 'NVB Aero City layout, aerial view (render)', image: photo('aero-city-aerial', 'Aerial rendering of the NVB Aero City plotted layout with internal roads and entrance gate') },
  { id: 'g-villa-pool', category: C.EXTERIOR, caption: 'Contemporary villa with pool (render)', image: photo('villa-pool-elevation', 'Rendering of a two-storey white contemporary villa with timber soffits and a swimming pool') },
  { id: 'g-aero-city-brochure', category: C.DEVELOPMENTS, caption: 'NVB Aero City brochure', image: photo('aero-city-brochure', 'NVB Aero City brochure — opposite Airport, Rajahmundry') },
];
