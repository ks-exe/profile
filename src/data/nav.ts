export const navItems = [
  { label: 'Home',         section: 'home' },
  { label: 'About',        section: 'about' },
  { label: 'Superpowers',  section: 'superpowers' },
  { label: 'Projects',     section: 'projects' },
  { label: 'Impact',       section: 'impact' },
  { label: 'Achievements', section: 'achievements' },
  { label: 'Videos',       section: 'youtube' },
  { label: 'Contact',      section: 'contact' },
];

export type NavItem = (typeof navItems)[number];
