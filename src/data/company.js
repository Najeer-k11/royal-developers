/**
 * Company information, contact details and site copy.
 *
 * Anything written in [square brackets] is a placeholder — replace it with the
 * real detail. Leaving a `value` / `url` empty keeps the item visible as a
 * placeholder but does not create a (broken) link.
 */
import logoMark from '../assets/brand/logo-mark.webp';
import logoFull from '../assets/brand/logo-full.webp';
import logoIcon from '../assets/brand/logo-icon.webp';
import founderPortrait from '../assets/brand/founder.webp';
import founderThumb from '../assets/brand/founder-thumb.webp';
import { photo } from './images';

export const company = {
  name: 'Royal Developers',
  tagline: 'Building Trust, Creating Lifestyles.',
  descriptor: 'Real Estate & Property Development',
  shortIntro:
    'With 23 years of experience, Royal Developers develops ventures, sells plots and land, and builds individual houses and duplex homes in Rajahmundry — with honest dealings and clear pricing.',
  logoMark,
  logoFull,
  logoIcon,
};

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'projects', label: 'Our Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  label: 'Royal Developers',
  heading: ['Building Trust,', 'Creating Lifestyles.'],
  text: 'For 23 years, we have helped families buy land and build homes they can trust. Honest pricing, good construction and support at every step.',
  image: photo('hero-dusk-residence', 'Contemporary residence illuminated at dusk'),
};

export const about = {
  eyebrow: 'About Royal Developers',
  heading: ['More Than Buildings.', 'We Build Trust.'],
  lead: 'With 23 years of experience in Rajahmundry, Royal Developers is built on one belief — a home is among the most important decisions a family will ever make, and it deserves a developer who treats it that way.',
  paragraphs: [
    'We develop ventures and handle property and land sales, and we build individual houses and duplex homes — with clear, per-square-foot pricing so you know exactly what you are paying for.',
    'Our approach is deliberately straightforward: clear communication, quality that can be seen and verified, and commitments we intend to keep. It is how we aim to earn trust — one project, and one customer, at a time.',
  ],
  image: photo('arch-white-facade', 'Sculptural white architectural facade against the sky'),
  detailImage: photo('int-living-open', 'Open-plan living space with natural light'),
  principles: [
    {
      title: 'Development Philosophy',
      text: 'Plan thoroughly, build honestly. We believe good developments come from patience at the drawing board and discipline on site.',
    },
    {
      title: 'Commitment to Quality',
      text: 'Materials, workmanship and finishing are treated as non-negotiable — because quality is what remains when everything else is forgotten.',
    },
    {
      title: 'Customer Satisfaction',
      text: 'We listen first. Clear answers, regular updates and attentive support guide every customer relationship.',
    },
    {
      title: 'Our Vision',
      text: 'To create better living spaces — well-planned, comfortable and enduring — that people are proud to call their own.',
    },
  ],
};

export const founder = {
  name: 'Raja Laxman',
  designation: 'Founder, Royal Developers',
  portrait: founderPortrait,
  thumb: founderThumb,
  // Replace with a short factual introduction (background, role, focus).
  intro:
    '[Short founder introduction — add two or three sentences about the founder’s background, role and the focus they bring to Royal Developers.]',
  quote:
    'A building can be completed in months. Trust takes far longer to build — and it is the only foundation worth building on.',
  message: [
    'Royal Developers was founded on a simple promise: to do what we say, and to build as though we were building for our own families. Quality is never left to chance, and every customer deserves complete clarity about what they are investing in.',
    'Our vision is to create living spaces that people are genuinely proud of — and to be a name they can recommend without hesitation.',
  ],
};

export const values = {
  eyebrow: 'Why Choose Royal Developers',
  heading: 'Principles that guide every project.',
  intro:
    'Choosing a developer is a decision about trust. These are the commitments we hold ourselves to on every project we undertake.',
  items: [
    {
      title: 'Commitment to Quality',
      text: 'Careful material selection, skilled workmanship and attention to finishing at every stage of construction.',
    },
    {
      title: 'Transparent Approach',
      text: 'Clear documentation, straightforward communication and no surprises — you always know where things stand.',
    },
    {
      title: 'Customer-Centric Development',
      text: 'Spaces planned around the way people actually live, with your needs at the centre of every decision.',
    },
    {
      title: 'Thoughtful Planning',
      text: 'Considered layouts, light, ventilation and everyday practicality designed in from the very first drawing.',
    },
    {
      title: 'Reliable Execution',
      text: 'Disciplined project management and close on-site supervision to deliver what was promised.',
    },
    {
      title: 'Building Long-Term Trust',
      text: 'Relationships that continue well beyond handover — our reputation is built one satisfied customer at a time.',
    },
  ],
};

export const statement = {
  image: photo('villa-glass-pavilion', 'Glass-fronted residence opening onto a pool terrace'),
  text: 'Spaces designed with care. Built to be lived in.',
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Let’s Build Something Exceptional.',
  text: 'Looking for a home, exploring an investment or planning a development? Share your property requirements and we will be glad to discuss them with you.',

  // `value` is used to build the link (tel: / mailto:). Leave empty until known.
  // NOTE: number as supplied by the client has 11 digits after +91 (Indian
  // mobiles have 10) — confirm with the client.
  phone: { label: '+91 94932288774', value: '+9194932288774' },
  email: { label: 'royaldevelopersrjy@gmail.com', value: 'royaldevelopersrjy@gmail.com' },
  address: {
    lines: ['Danavaipeta, Beside SBI', 'Rajahmundry, Andhra Pradesh'],
    mapUrl: '', // optional Google Maps link
  },
  hours: '10 AM – 8 PM',

  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  whatsapp: {
    number: '9194932288774', // see phone note above
    message: 'Hello Royal Developers, I would like to know more about your projects.',
  },

  /**
   * Contact form delivery.
   * This is a static site, so the form needs a form-handling service to
   * actually deliver messages. Set `endpoint` to a service URL that accepts a
   * JSON POST (e.g. Formspree, Web3Forms, Getform or your own API).
   * While it is empty, the form validates input and then offers to open the
   * visitor's email app (if an email address is configured above) — it never
   * claims a message was sent.
   */
  form: {
    endpoint: '',
  },
};

// Leave `url` empty to show the icon as "not yet linked".
export const social = [
  { id: 'instagram', label: 'Instagram', url: '' },
  { id: 'facebook', label: 'Facebook', url: '' },
  { id: 'linkedin', label: 'LinkedIn', url: '' },
  { id: 'youtube', label: 'YouTube', url: '' },
];
