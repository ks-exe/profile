/**
 * All portfolio projects — single source of truth.
 * URLs are verified. Missing demo/github URLs are intentionally omitted.
 * Video walkthroughs use real YouTube links only.
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
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    number: '01',
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
    highlight: true,
  },
  {
    number: '02',
    category: 'AI Data Engineering + AWS',
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
    highlight: true,
  },
  {
    number: '03',
    category: 'Agentic AI + DataOps',
    title: 'Project Ullo',
    description:
      'AI-Assisted Incident Triage and Recovery Platform for Data Pipelines. An agentic DataOps system designed to detect data pipeline issues, investigate incidents, and assist with recovery workflows.',
    capabilities: [
      'Schema drift detection.',
      'Missing and unexpected value detection.',
      'Intelligent incident triage with agent-assisted recovery.',
      'Data pipeline validation via Dagster orchestration.',
    ],
    stack: ['Python', 'AWS', 'Strands Agents', 'Amazon Bedrock', 'Dagster', 'PostgreSQL', 'S3'],
    videoUrl: 'https://youtu.be/L49PCaaJgPQ',
  },
  {
    number: '04',
    category: 'AI + Data Engineering',
    title: 'AI-Powered Security Incident Analytics Platform',
    description:
      'A data engineering portfolio project demonstrating a complete medallion analytics architecture — from synthetic security log generation through Bronze/Silver/Gold transformations, ML-powered anomaly detection, semantic layer, and interactive dashboards.',
    capabilities: [
      'Synthetic security event generation (10K+ events).',
      'dlt ingestion → dbt medallion transformations (Bronze → Silver → Gold).',
      'IsolationForest anomaly detection on enriched events.',
      'Cube.js semantic layer + Apache Superset dashboards.',
      'Dagster orchestration for the full pipeline.',
    ],
    stack: ['Python', 'dlt', 'dbt', 'DuckDB', 'Dagster', 'scikit-learn', 'Cube.js', 'Apache Superset', 'MinIO', 'Apache Iceberg', 'Docker'],
    github: 'https://github.com/ks-exe/AI-Powered-Security-Incident-Analytics-Platform',
  },
  {
    number: '05',
    category: 'Amazon Bedrock + AgentCore',
    title: 'Amazon Bedrock AgentCore Harness',
    description:
      'A customer support chatbot for an online shop built on Amazon Bedrock\'s AgentCore managed harness pattern, a prompt-routed Bedrock Flow, Lambda-backed bug-report tooling, DynamoDB ticket persistence, and Bedrock Evaluations.',
    capabilities: [
      'FAQ-grounded answers via Bedrock Flow prompt routing.',
      'Structured bug-report intake with DynamoDB persistence.',
      'Multi-turn tool calling for reproducible incident capture.',
      'Bedrock Evaluations for pre-release verification.',
      'Prompt-injection safeguards and fallback handling.',
    ],
    stack: ['Python', 'Amazon Bedrock', 'AgentCore', 'Bedrock Flows', 'AWS Lambda', 'DynamoDB', 'Bedrock Evaluations'],
    github: 'https://github.com/ks-exe/Amazon-Bedrock-Agentcore-Harness',
    videoUrl: 'https://youtu.be/zZUFQLpvs8A',
  },
  {
    number: '06',
    category: 'Data Engineering + Web3',
    title: 'EcoProof — Climate Data & Environmental Monitoring',
    description:
      'A full-stack environmental monitoring prototype that processes real OpenAQ air-quality observations and Open-Meteo weather data, applies explainable sensor-quality checks, and commits verified hourly batches to Ethereum Sepolia for tamper-evident audit.',
    capabilities: [
      'Real OpenAQ + Open-Meteo data ingestion and immutable Parquet storage.',
      'Geographic station graph with wind-weighted quality assessment.',
      'Merkle-proof audit workflow committed to Ethereum Sepolia.',
      'Solidity registry for write-once record anchoring.',
      'Interactive station map, observed/expected charts, and event inspection UI.',
    ],
    stack: ['Python', 'FastAPI', 'DuckDB', 'Parquet', 'Solidity', 'web3.py', 'React', 'TypeScript', 'Leaflet'],
    github: 'https://github.com/ks-exe/EcoProof_Climate-Data-Environmental-Monitoring',
  },
  {
    number: '07',
    category: 'AI + Intelligent Learning',
    title: 'NeuroPath AI',
    description:
      'An adaptive learning platform for ADHD students built for the AWS 10,000 AIdeas Competition. Uses a Cognitive Twin model — a personalized AI profile that evolves with student performance — and routes to multiple AWS AI models intelligently.',
    capabilities: [
      'Cognitive Twin: personalized learning profiles that evolve with performance.',
      'Multi-model AI routing: Claude 3 Haiku, Claude 3.5 Sonnet, Nova Canvas, Llama 3.',
      'ADHD-optimized UX: micro-progress indicators and chunked content delivery.',
      'Chat-to-Quiz Bridge and growth analysis charts.',
      'English and Urdu interaction support.',
    ],
    stack: ['React', 'TypeScript', 'AWS Amplify Gen 2', 'Amazon Bedrock', 'Lambda', 'DynamoDB', 'Tailwind CSS'],
    github: 'https://github.com/ks-exe/Neuro-Path-AI',
    videoUrl: 'https://youtu.be/LGUcXuvvigM',
    status: 'AWS 10,000 AIdeas — Top 50 Finalist',
  },
];
