/**
 * Community leadership & impact: statistics and timeline.
 */
export type ImpactStat = {
  value: string;
  label: string;
  detail: string;
};

export type TimelineItem = {
  label: string;
  detail: string;
};

export const impactStats: ImpactStat[] = [
  { value: '15', label: 'AWS-focused events', detail: 'in 8 months' },
  { value: '90+', label: 'Average event attendance', detail: 'per session' },
  { value: '3,000+', label: 'Community members & followers', detail: 'combined reach' },
  { value: '1,000+', label: 'Registrations in one week', detail: 'AWS Student Community Day Sahiwal 2026' },
  { value: '500+', label: 'Attendees at the event', detail: 'AWS Student Community Day Sahiwal 2026' },
  { value: '170+', label: 'Girls mentored in person', detail: 'hands-on mentoring' },
];

export const impactTimeline: TimelineItem[] = [
  { label: 'Started the AWS student community in Sahiwal', detail: 'Built a small group of learners from the ground up.' },
  { label: 'Organized hands-on AWS learning sessions', detail: 'Practical cloud labs for early-career students.' },
  { label: 'Launched Seekho or Banao technical learning sessions', detail: 'A recurring series on building real projects.' },
  { label: 'Led the Kiro Challenge and AI learning initiatives', detail: 'AI-first learning tracks for the community.' },
  { label: 'Organized AWS Student Community Day Sahiwal 2026', detail: '1,000+ registrations in one week, 500+ attendees.' },
];

export const impactStatement =
  'From a small group of learners to a growing AWS community, the goal has always been the same: create opportunities for students to learn by building.';
