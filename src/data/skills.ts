/**
 * Technical capability groups. Skill items are short labels — no
 * fabricated proficiency percentages. Lucide icon names map to components.
 */
import type { LucideIcon } from 'lucide-react';
import { Brain, Database, Cloud, Terminal } from 'lucide-react';

export type Skill = string;

export type SkillGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Python', 'Machine Learning', 'Generative AI', 'Amazon Bedrock', 'RAG', 'AI Agents'],
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    icon: Database,
    skills: ['SQL', 'PostgreSQL', 'ETL / ELT', 'Data Quality', 'Data Pipelines', 'Apache Iceberg', 'Dagster'],
  },
  {
    id: 'aws-cloud',
    title: 'AWS & Cloud',
    icon: Cloud,
    skills: ['AWS Amplify', 'Amazon S3', 'AWS Lambda', 'Amazon RDS', 'Amazon Bedrock', 'AWS IAM', 'Cloud Architecture'],
  },
  {
    id: 'dev-devops',
    title: 'Development & DevOps',
    icon: Terminal,
    skills: ['Git & GitHub', 'Docker', 'Linux', 'REST APIs', 'React', 'TypeScript', 'CI/CD fundamentals'],
  },
];
