/** Minimal line icons. All inherit `currentColor` and are hidden from assistive tech. */
function Icon({ size = 20, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (props) => (
  <Icon {...props}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpRight = (props) => (
  <Icon {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const ChevronLeft = (props) => (
  <Icon {...props}>
    <path d="m15 5-7 7 7 7" />
  </Icon>
);

export const ChevronRight = (props) => (
  <Icon {...props}>
    <path d="m9 5 7 7-7 7" />
  </Icon>
);

export const Close = (props) => (
  <Icon {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </Icon>
);

export const Phone = (props) => (
  <Icon {...props}>
    <path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3A2.5 2.5 0 0 1 18.5 20 15.5 15.5 0 0 1 4 5.5 2.5 2.5 0 0 1 6.5 3Z" />
  </Icon>
);

export const Mail = (props) => (
  <Icon {...props}>
    <rect x="3" y="5" width="18" height="14" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);

export const MapPin = (props) => (
  <Icon {...props}>
    <path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);

export const Clock = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const WhatsApp = (props) => (
  <Icon {...props}>
    <path d="M3.5 20.5 4.8 16A8.5 8.5 0 1 1 8 19.200l-4.5 1.300Z" />
    <path d="M9 8.500c0 3 2.5 5.5 5.5 5.500l1-1.5-2-1-.8.800a3.5 3.5 0 0 1-1.5-1.500l.8-.8-1-2L9 8.500Z" />
  </Icon>
);

export const Instagram = (props) => (
  <Icon {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.2 6.800h.01" />
  </Icon>
);

export const Facebook = (props) => (
  <Icon {...props}>
    <path d="M14 21v-7.500h2.500L17 10h-3V8.200c0-1 .4-1.7 1.8-1.700H17V3.600c-.5-.1-1.4-.1-2.3-.1C12.3 3.5 11 5 11 7.500V10H8.500v3.500H11V21" />
  </Icon>
);

export const LinkedIn = (props) => (
  <Icon {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" />
    <path d="M8 10.500V16M8 7.800v.01M12 16v-5.500M12 13a2 2 0 0 1 4 0v3" />
  </Icon>
);

export const YouTube = (props) => (
  <Icon {...props}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
    <path d="m10.5 9.5 4 2.5-4 2.500v-5Z" />
  </Icon>
);

export const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: LinkedIn,
  youtube: YouTube,
};
