/**
 * The three "superpowers" for the creative interactive feature.
 * Each card reveals different facets of Khadija's journey.
 *
 * Icons are referenced by string key and mapped to Lucide icons
 * inside the Superpowers component so data stays UI-agnostic.
 */
export type SuperpowerId = 'builder' | 'leader' | 'enabler';

export type SuperpowerPoint = string;

export type Superpower = {
  id: SuperpowerId;
  title: string;
  subtitle: string;
  description: string;
  icon: 'terminal' | 'users' | 'lightbulb';
  /** Featured project tags shown under the builder reveal. */
  featureProjects?: string[];
  points: SuperpowerPoint[];
  /** Headline metrics shown when this superpower is selected. */
  metrics?: { value: string; label: string }[];
};

export const superpowers: Superpower[] = [
  {
    id: 'builder',
    title: 'The Builder',
    subtitle: 'Code / Terminal',
    description: 'I turn ideas into working systems.',
    icon: 'terminal',
    featureProjects: ['Data Quality Inspector', 'Project Ullo'],
    points: [
      'AI-powered applications.',
      'Data engineering and pipeline automation.',
      'AWS cloud architecture.',
      'Technical projects and experiments.',
    ],
    metrics: [
      { value: '2', label: 'Featured builds' },
      { value: 'RAG', label: 'AI agents & retrieval' },
    ],
  },
  {
    id: 'leader',
    title: 'The Leader',
    subtitle: 'Users / Network',
    description: 'I build communities, not just applications.',
    icon: 'users',
    points: [
      'AWS Student Builder Group Lead, COMSATS Sahiwal.',
      '15 AWS-focused events in 8 months.',
      '90+ average event attendance.',
      '3,000+ combined community members and followers.',
      'AWS Student Community Day Sahiwal 2026.',
      '1,000+ registrations within one week and 500+ attendees.',
    ],
    metrics: [
      { value: '15', label: 'AWS events / 8 months' },
      { value: '3,000+', label: 'Community members' },
      { value: '500+', label: 'Community Day attendees' },
    ],
  },
  {
    id: 'enabler',
    title: 'The Enabler',
    subtitle: 'Lightbulb / Graduation cap',
    description: 'I help others become builders.',
    icon: 'lightbulb',
    points: [
      'Technical mentoring.',
      'Hands-on workshops and learning sessions.',
      'AWS technical talks and knowledge sharing.',
      'Mentoring 170+ girls in person.',
    ],
    metrics: [
      { value: '170+', label: 'Girls mentored in person' },
      { value: 'Weekly', label: 'Hands-on sessions' },
    ],
  },
];
