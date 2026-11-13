import { useEffect, useState } from 'react';

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -54% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
