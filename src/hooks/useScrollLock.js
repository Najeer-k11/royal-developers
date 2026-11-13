import { useEffect } from 'react';

/** Prevents the page behind an overlay from scrolling while `locked` is true. */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const root = document.documentElement;
    root.classList.add('is-scroll-locked');
    return () => root.classList.remove('is-scroll-locked');
  }, [locked]);
}
