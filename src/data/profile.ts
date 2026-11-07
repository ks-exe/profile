/**
 * Central profile information.
 * Update name, role, location, bio and availability here.
 * Everything in the portfolio reads from this file.
 */
export const profile = {
  name: 'Khadija Sajid',
  shortName: 'KS',
  brand: 'KHADIJA.SAJID',
  role: 'AI & Data Engineer',
  roles: ['AI Engineer', 'Data Engineer', 'Cloud & AWS Builder', 'Community Leader'],
  location: 'Pakistan',
  university: 'COMSATS University Islamabad, Sahiwal Campus',
  year: 'Final year, Computer Science undergraduate',
  availability: 'Open to AI Engineering, Data Engineering and Cloud opportunities.',
  email: 'khadijasajid280@gmail.com',
  intro: 'AI • DATA • CLOUD ENGINEERING',
  headline: 'I Build Intelligent Systems. I Engineer What Comes Next.',
  supporting:
    'From AI-powered applications and reliable data pipelines to cloud-native solutions, I turn complex technical ideas into working systems.',
  about: [
    "I'm a Computer Science undergraduate focused on AI Engineering, Data Engineering, and cloud technologies.",
    'I enjoy building practical systems that solve real problems, from AI-assisted data quality analysis to intelligent data pipeline automation.',
    'Beyond engineering, I lead the AWS Student Builder Group at COMSATS Sahiwal, where I\'ve worked to make hands-on cloud and AI learning accessible to a growing student community.',
    'I believe technology becomes more meaningful when we build it, share it, and help others build with it.',
  ],
  principles: [
    { title: 'Build with purpose', description: 'Every system I design solves a real, well-understood problem.' },
    { title: 'Learn by building', description: 'I ship, measure, and refine — theory only matters when it runs.' },
    { title: 'Grow through community', description: 'I learn faster by teaching and by building alongside others.' },
  ],
  mission: 'Build. Engineer. Enable.',
  focus: ['AI Engineering', 'Data Engineering', 'AWS & Cloud'],
};

export type Profile = typeof profile;
