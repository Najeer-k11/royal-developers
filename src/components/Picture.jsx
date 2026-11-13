import { useEffect, useRef, useState } from 'react';
import './Picture.css';

/**
 * Image with reserved space (no layout shift), lazy loading, a quiet loading
 * state and a graceful fallback when the file is missing or fails to load.
 *
 * `image`  { src, srcSet?, width, height, alt }  — see data/images.js
 * `ratio`  CSS aspect-ratio for the frame, e.g. '4 / 3'. Defaults to the
 *          image's own proportions.
 */
export default function Picture({
  image,
  ratio,
  sizes = '100vw',
  eager = false,
  tone = 'light',
  position,
  className = '',
}) {
  const imgRef = useRef(null);
  const [status, setStatus] = useState(image ? 'loading' : 'error');

  useEffect(() => {
    if (!image) {
      setStatus('error');
      return;
    }
    const img = imgRef.current;
    if (img?.complete) setStatus(img.naturalWidth > 0 ? 'loaded' : 'error');
    else setStatus('loading');
  }, [image]);

  const frameRatio = ratio ?? (image ? `${image.width} / ${image.height}` : '4 / 3');

  return (
    <span
      className={`picture picture--${tone} is-${status} ${className}`.trim()}
      style={{ aspectRatio: frameRatio }}
    >
      {image && status !== 'error' && (
        <img
          ref={imgRef}
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.srcSet ? sizes : undefined}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : undefined}
          style={position ? { objectPosition: position } : undefined}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
      {status === 'error' && <span className="picture__fallback">Photograph unavailable</span>}
    </span>
  );
}
