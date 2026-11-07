/**
 * Achievements and credentials. Each credential may have a `verifyUrl`
 * that should be filled in later — never invented. `pending: true` flags
 * items whose status still needs confirmation.
 */
import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  Trophy,
  Users,
  Star,
  Award,
  GraduationCap,
  Sparkles,
  Github,
  Mic,
} from 'lucide-react';

export type Achievement = {
  id: string;
  title: string;
  detail: string;
  icon: LucideIcon;
  /** Verification URL to be configured later (left blank intentionally). */
  verifyUrl?: string;
  /** True if the credential is still being verified / in progress. */
  pending?: boolean;
};

export const achievements: Achievement[] = [
  {
    id: 'aws-clf',
    title: 'AWS Certified Cloud Practitioner',
    detail: 'Foundational AWS cloud certification.',
    icon: BadgeCheck,
  },
  {
    id: 'ai-deas-top50',
    title: 'AWS 10,000 AIdeas — Top 50 Finalist',
    detail: 'Selected among the top entries in the AWS 10,000 AIdeas challenge.',
    icon: Trophy,
  },
  {
    id: 'builder-group-lead',
    title: 'AWS Student Builder Group Lead',
    detail: 'Lead, COMSATS University Islamabad, Sahiwal Campus.',
    icon: Users,
  },
  {
    id: 'weekly-challenge',
    title: 'AWS Weekly Challenge Achievement',
    detail: 'Recognition through the AWS weekly builder challenges.',
    icon: Star,
  },
  {
    id: 'datacamp-python',
    title: 'DataCamp Associate Python Developer',
    detail: 'Applied Python development certification.',
    icon: Award,
  },
  {
    id: 'ibm-ds',
    title: 'IBM Data Science Professional Certificate',
    detail: 'Multi-course professional certificate.',
    icon: GraduationCap,
    pending: true, // Mark as completed only when verified
  },
  {
    id: 'aws-ml-foundations',
    title: 'AWS Educate ML Foundations',
    detail: 'Machine learning foundations through AWS Educate.',
    icon: Sparkles,
  },
  {
    id: 'gen-ai-aws',
    title: 'Introducing Generative AI with AWS',
    detail: 'Generative AI fundamentals on AWS.',
    icon: Sparkles,
  },
  {
    id: 'gh-student-pack',
    title: 'GitHub Student Developer Pack',
    detail: 'GitHub developer tools and benefits.',
    icon: Github,
  },
  {
    id: 'acd-lahore-2025',
    title: 'AWS Community Day Lahore 2025 — Speaker',
    detail: 'Speaking experience at AWS Community Day Lahore.',
    icon: Mic,
  },
];
