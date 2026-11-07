/**
 * External links — single source of truth for all personal URLs.
 * All URLs are verified. Do not modify or shorten them.
 */
export type LinkItem = {
  label: string;
  href: string;
  pending?: boolean;
};

export const links = {
  email:           'mailto:khadijasajid280@gmail.com',
  github:          'https://github.com/ks-exe',
  linkedin:        'https://www.linkedin.com/in/khadija-sajid-267091266/',
  awsBuilderCenter:'https://builder.aws.com/profile?tab=badges',
  medium:          'https://medium.com/@khadijasajid1369',
  devCommunity:    'https://dev.to/khadija_sajid',
  youtube:         'https://www.youtube.com/@KhadijaSajid-Tech',
  youtubeChannel:  'https://www.youtube.com/channel/UC5FapuVL0HpBifsXnmsI3CQ',
};

/** Writing / knowledge-sharing channels — shown in the Writing section */
export const writingChannels: LinkItem[] = [
  { label: 'YouTube',           href: links.youtube },
  { label: 'AWS Builder Center',href: links.awsBuilderCenter },
  { label: 'Medium',            href: links.medium },
  { label: 'DEV Community',     href: links.devCommunity },
  { label: 'GitHub',            href: links.github },
];

/** Contact channels — shown in the Contact section and footer */
export const contactChannels: LinkItem[] = [
  { label: 'Email',             href: links.email },
  { label: 'LinkedIn',          href: links.linkedin },
  { label: 'GitHub',            href: links.github },
  { label: 'YouTube',           href: links.youtube },
  { label: 'AWS Builder Center',href: links.awsBuilderCenter },
];
