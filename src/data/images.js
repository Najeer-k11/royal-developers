/**
 * Photo registry.
 *
 * Every .webp file in src/assets/photos is available by its file name
 * (without extension) through `photo('file-name')`.
 *
 * To add a real photograph:
 *   1. Export it as WebP, ideally ~1600px on the long edge  ->  my-photo.webp
 *   2. (Optional) add an 800px version for small screens    ->  my-photo-sm.webp
 *   3. (Optional) add its pixel size to manifest.json so the gallery can
 *      reserve the exact space before the image loads.
 *   4. Reference it by name in projects.js / gallery.js.
 *
 * NOTE: the photographs currently in that folder are licence-free stock
 * placeholders (Unsplash). They are NOT Royal Developers properties and should
 * be replaced with real project photography before launch.
 */
import manifest from '../assets/photos/manifest.json';

const files = import.meta.glob('../assets/photos/*.webp', {
  eager: true,
  import: 'default',
});

const FALLBACK_SIZE = { width: 1600, height: 1067 };

export function photo(name, alt = '') {
  const src = files[`../assets/photos/${name}.webp`];
  if (!src) {
    if (import.meta.env.DEV) {
      console.warn(`[images] No photo named "${name}" in src/assets/photos`);
    }
    return null;
  }
  const small = files[`../assets/photos/${name}-sm.webp`];
  const { width, height } = manifest[name] ?? FALLBACK_SIZE;
  return {
    src,
    srcSet: small ? `${small} 800w, ${src} ${width}w` : undefined,
    width,
    height,
    alt,
  };
}
