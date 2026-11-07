/**
 * External links — social, writing profiles, and contact channels.
 *
 * All URLs below are VERIFIED personal resources. Do not invent, modify,
 * or shorten them. To add a new not-yet-configured link, set `pending: true`
 * so the UI marks it as "to be configured" instead of rendering a broken
 * button.
 */
export type LinkItem = {
  label: string;
  href: string;
  /** Mark true when this is still a placeholder the owner needs to fill in. */
  pending?: boolean;
};

export const links = {
  email: 'mailto:khadijasajid280@gmail.com',
  github: 'https://github.com/ks-exe',
  linkedin: 'https://www.linkedin.com/in/khadija-sajid-267091266/',
  awsBuilderCenter: 'https://builder.aws.com/profile?tab=badges',
  medium: 'https://medium.com/@khadijasajid1369',
  devCommunity: 'https://dev.to/khadija_sajid',
};

export const writingChannels: LinkItem[] = [
  { label: 'AWS Builder Center', href: links.awsBuilderCenter },
  { label: 'Medium', href: links.medium },
  { label: 'DEV Community', href: links.devCommunity },
  { label: 'GitHub', href: links.github },
];

export const contactChannels: LinkItem[] = [
  { label: 'Email', href: links.email },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'GitHub', href: links.github },
  { label: 'AWS Builder Center', href: links.awsBuilderCenter },
];
