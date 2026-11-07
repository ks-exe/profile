/**
 * Portfolio projects — single source of truth.
 *
 * ORDER IS INTENTIONAL. Do not sort alphabetically, by date, or by category.
 * To change the display order, reorder the array entries here.
 *
 * featured: true  → first three projects, receive stronger visual emphasis.
 * featured: false → remaining four, same polished style but standard weight.
 *
 * All URLs are verified. Missing links are intentionally omitted rather than fabricated.
 */
export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  features?: string[];
  capabilities?: string[];
  stack: string[];
  github?: string;
  demoUrl?: string;
  videoUrl?: string;
  status?: string;
  /** Top three projects receive stronger visual hierarchy. */
  featured: boolean;
};

export const projects: Project[] = [
  // ── FEATURED (01–03) ────────────────────────────────────────────────────
  {
    number: '01',
    featured: true,
    category: 'AI + Data Engineering + AWS',
    title: 'AI Data Pipeline Generator',
    description:
      'A production-oriented full-stack MVP that turns natural language or structured pipeline notes into an AWS-native data architecture, ETL workflow, interactive diagram, service recommendations, and exportable documentation.',
    features: [
      'Natural language → AWS pipeline architecture generation.',
      'Interactive architecture diagrams with React Flow.',
      'Save, reopen, and export designs as Markdown and JSON.',
      'Amazon Bedrock backend via FastAPI on Lambda.',
    ],
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'Amazon Bedrock', 'AWS CDK', 'Lambda', 'API Gateway', 'DynamoDB', 'S3', 'AWS Amplify'],
    github: 'https://github.com/ks-exe/AI-data-Pipeline-generator',
    demoUrl: 'https://dev.d273q6bevgfbgl.amplifyapp.com',
  },
  {
    number: '02',
    featured: true,
    category: 'Data Engineering + AI Analytics',
    title: 'AI-Powered Security Incident Analytics Platform',
    description:
      'A data engineering portfolio project demonstrating a complete medallion analytics architecture — from synthetic security log generation through Bronze/Silver/Gold transformations, ML-powered anomaly detection, semantic layer, and interactive dashboards.',
    capabilities: [
      'Synthetic security event generation (10K+ events).',
      'dlt ingestion → dbt medallion transformations (Bronze → Silver → Gold).',
      'IsolationForest anomaly detection on enriched security events.',
      'Cube.js semantic layer + Apache Superset dashboards.',
      'Dagster orchestration for the full pipeline.',
    ],
    stack: ['Python', 'dlt', 'dbt', 'DuckDB', 'Dagster', 'scikit-learn', 'Cube.js', 'Apache Superset', 'MinIO', 'Apache Iceberg', 'Docker'],
    github: 'https://github.com/ks-exe/AI-Powered-Security-Incident-Analytics-Platform',
  },
  {
    number: '03',
    featured: true,
    category: 'Data Engineering + Web3 + Environmental',
    title: 'EcoProof — Climate Data & Environmental Monitoring',
    description:
      'A full-stack environmental monitoring prototype that processes real OpenAQ air-quality observations and Open-Meteo weather data, applies explainable sensor-quality checks, and commits verified hourly batches to Ethereum Sepolia for tamper-evident audit.',
    capabilities: [
      'Real OpenAQ + Open-Meteo data ingestion into immutable Parquet.',
      'Geographic station graph with wind-weighted quality assessment.',
      'Merkle-proof audit workflow committed to Ethereum Sepolia.',
      'Solidity registry for write-once record anchoring.',
      'Interactive station map, observed/expected charts, and event inspection UI.',
    ],
    stack: ['Python', 'FastAPI', 'DuckDB', 'Parquet', 'Solidity', 'web3.py', 'React', 'TypeScript', 'Leaflet'],
    github: 'https://github.com/ks-exe/EcoProof_Climate-Data-Environmental-Monitoring',
  },

  // ── STANDARD (04–07) ────────────────────────────────────────────────────
  {
    number: '04',
    featured: false,
    category: 'Agentic AI + DataOps',
    title: 'Project Ullo — AI-Assisted Incident Triage and Recovery Platform for Data Pipelines',
    description:
      'An agentic DataOps system designed to detect data pipeline issues, investigate incidents, and assist with recovery workflows using Strands Agents and Amazon Bedrock.',
    capabilities: [
      'Schema drift detection.',
      'Missing and unexpected value detection.',
      'Intelligent incident triage with agent-assisted recovery.',
      'Data pipeline validation via Dagster orchestration.',
    ],
    stack: ['Python', 'AWS', 'Strands Agents', 'Amazon Bedrock', 'Dagster', 'PostgreSQL', 'S3'],
    github: 'https://github.com/ks-exe/project-ullo',
    videoUrl: 'https://youtu.be/L49PCaaJgPQ',
  },
  {
    number: '05',
    featured: false,
    category: 'Amazon Bedrock + AgentCore',
    title: 'Amazon Bedrock AgentCore Harness',
    description:
      'A customer support chatbot for an online shop built on Amazon Bedrock\'s AgentCore managed harness pattern, a prompt-routed Bedrock Flow, Lambda-backed bug-report tooling, DynamoDB ticket persistence, and Bedrock Evaluations.',
    capabilities: [
      'FAQ-grounded answers via Bedrock Flow prompt routing.',
      'Structured bug-report intake with DynamoDB persistence.',
      'Multi-turn tool calling for reproducible incident capture.',
      'Bedrock Evaluations for pre-release verification.',
    ],
    stack: ['Python', 'Amazon Bedrock', 'AgentCore', 'Bedrock Flows', 'AWS Lambda', 'DynamoDB', 'Bedrock Evaluations'],
    github: 'https://github.com/ks-exe/Amazon-Bedrock-Agentcore-Harness',
    videoUrl: 'https://youtu.be/zZUFQLpvs8A',
  },
  {
    number: '06',
    featured: false,
    category: 'AI + Data Engineering + AWS',
    title: 'Data Quality Inspector',
    description:
      'An AWS-powered data quality analysis application that helps users inspect datasets, identify quality issues, and generate AI-driven summaries and recommendations.',
    features: [
      'Dataset analysis and quality scoring.',
      'AI-generated summaries and recommendations.',
      'AWS-powered serverless deployment.',
    ],
    stack: ['Python', 'Amazon Bedrock', 'API Gateway', 'AWS Lambda'],
    github: 'https://github.com/ks-exe/Data-Quality-Inspector',
    demoUrl: 'https://u97j0opdi9.execute-api.us-east-2.amazonaws.com',
  },
  {
    number: '07',
    featured: false,
    category: 'AI + Intelligent Learning',
    title: 'NeuroPath AI',
    description:
      'An adaptive learning platform for ADHD students built for the AWS 10,000 AIdeas Competition. Uses a Cognitive Twin model — a personalized AI profile that evolves with student performance — and routes to multiple AWS AI models intelligently.',
    capabilities: [
      'Cognitive Twin: personalized learning profiles that evolve with performance.',
      'Multi-model AI routing: Claude 3 Haiku, Claude 3.5 Sonnet, Nova Canvas, Llama 3.',
      'ADHD-optimized UX: micro-progress indicators and chunked content delivery.',
      'English and Urdu interaction support.',
    ],
    stack: ['React', 'TypeScript', 'AWS Amplify Gen 2', 'Amazon Bedrock', 'Lambda', 'DynamoDB'],
    github: 'https://github.com/ks-exe/Neuro-Path-AI',
    videoUrl: 'https://youtu.be/LGUcXuvvigM',
    status: 'AWS 10,000 AIdeas — Top 50 Finalist',
  },
];
