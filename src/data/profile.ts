/**
 * Single source of truth for all site content.
 * Edit values here — components read from this file.
 */

export const profile = {
  name: 'Padma Gnanapriya',
  // The Hero splits this on "&" — keep the role after the "&".
  headline: 'Full-Stack Engineer & Associate Technical Lead',
  tagline: 'Scalable, Cost-Optimized Cloud Platforms',
  subheadline:
    // 'Senior Full-Stack Software Engineer with 5+ years of experience building enterprise software. Experienced in designing and building scalable, highly available, and cost-efficient distributed systems using React, Node.js, Express, Spring Boot, AWS, and PostgreSQL. Proven track record of re-architecting systems, building event-driven microservices, leading engineering initiatives, mentoring developers, and delivering reliable, production-ready software.',
  'Associate Technical Lead with 5+ years building enterprise software. Designs and delivers scalable, highly available systems using React, Node.js, Spring Boot, AWS, and PostgreSQL. Experienced in system re-architecture, event-driven microservices, and API design, with hands-on use of AI-assisted development tools to speed up delivery without compromising code quality. Leads engineering initiatives and mentors developers.',
  // Toggles the "Available for freelance web development" pill in the Hero.
  // Set back to true to show it again.
  availableForFreelance: false,
  // Native-script spellings of the name, rendered in the Footer with proper
  // lang attributes so Sinhala/Tamil searches for "Padma Gnanapriya" resolve.
  nameVariants: [
    { lang: 'si', script: 'Sinhala', name: 'පද්ම ඥානප්‍රිය' },
    { lang: 'ta', script: 'Tamil', name: 'பத்ம ஞானப்பிரிய' },
  ],
  email: 'padmaisuru@gmail.com',
  // Drop your PDF at public/cv/Padma_Gnanapriya.pdf (see README)
  cvPath: '/cv/Padma_Gnanapriya.pdf',
  photo: '/images/padma.webp',
  // Medium handle WITHOUT the leading @ — used to build the RSS feed URL
  mediumUsername: 'padmagnanapriya',
  socials: {
    github: 'https://github.com/PadmaGnanapriya',
    linkedin: 'https://www.linkedin.com/in/padma-gnanapriya/',
    medium: 'https://medium.com/@padmagnanapriya',
  },
} as const

export type ExperienceItem = {
  role: string
  company: string
  /** Company website — renders the company name as a link. */
  companyUrl?: string
  period: string
  /** Tech stack + work mode shown under the role heading (mirrors the CV). */
  stack: string
  current?: boolean
  summary: string
  /** Wrap the lead-in phrase in **double asterisks** to bold it, as in the CV. */
  highlights: string[]
}

const VELARIS_STACK = 'React · Redux · Node.js · Express · PostgreSQL · AWS · Hybrid, Colombo, Sri Lanka'
const VELARIS_URL = 'https://www.velaris.io/'

export const experience: ExperienceItem[] = [
  {
    role: 'Associate Technical Lead',
    company: 'Velaris',
    companyUrl: VELARIS_URL,
    period: 'Jun 2026 — Present',
    stack: VELARIS_STACK,
    current: true,
    summary:
      'Leading a full-stack squad — owning planning, technical direction, code review and delivery while raising the engineering quality bar.',
    highlights: [
      '**Own platform reliability and observability** — real-time monitoring built on AWS SQS failure-queue analysis, automated Slack alerts, and custom CloudWatch alarms that surface processing failures and delays as they happen.',
      '**Resolved 500+ data-quality issues** by designing and rolling out a platform-wide event-tracking process.',
      '**Cut recurring cloud spend across 45 client environments** by deduplicating AWS Secrets Manager calls, trimming CloudWatch log volume, and optimizing core Node.js event handlers to reduce paid third-party API usage.',
      '**Lead a full-stack React and Node.js/Express squad** across planning, technical direction, and code review, driving independent feature ownership across the team.',
      '**Mentor engineers** on React and Node.js architecture, coding standards, and advanced Git workflows.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Velaris',
    companyUrl: VELARIS_URL,
    period: 'Jun 2024 — Jun 2026',
    stack: VELARIS_STACK,
    summary:
      'Led performance engineering and enterprise integrations end to end across React, Node.js and AWS.',
    highlights: [
      '**Improved throughput 11x and reduced external API calls by 99%** by redesigning the Node.js data-synchronization process, resolving a six-month bottleneck in the legacy system.',
      '**Re-architected AWS SES email infrastructure for tenant-level isolation** in three days on Node.js Lambda, sustaining 60,000 sends per run with no failures.',
      '**Delivered enterprise data integrations** (Stripe, Mixpanel, Snowflake) end-to-end across React UIs and Node.js services, using AI-assisted workflows to cut delivery time by 3–4 days per integration.',
      '**Tripled real-time sync speed in the Intercom integration**, better supporting large enterprise customers.',
      '**Closed critical findings from external security audits** and completed internal security challenges.',
      '**Optimized AWS costs by replacing FIFO queues with Standard queues** for event-driven syncs where event processing order is not required.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Velaris',
    companyUrl: VELARIS_URL,
    period: 'Jul 2023 — Jun 2024',
    stack: VELARIS_STACK,
    summary: 'Owned email deliverability and engagement features on a serverless AWS stack.',
    highlights: [
      '**Built an email analytics dashboard** in React and Chart.js, with metric computation on AWS Lambda, to track engagement and improve deliverability.',
      '**Implemented Gmail-compliant one-click unsubscribe**, improving sender reputation and delivery performance.',
      "**Researched and developed the platform's bulk email verification** to mitigate email reputation issues.",
      '**Reduced infrastructure costs** by migrating core services and event-handler templates to serverless on AWS Lambda.',
      '**Owned production deployments and releases** — release notes, documentation, and testing.',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Velaris',
    companyUrl: VELARIS_URL,
    period: 'Mar 2022 — Jul 2023',
    stack: VELARIS_STACK,
    summary: 'Where the Velaris journey began — building the backend services behind new platform features.',
    highlights: [
      '**Built scalable Express.js REST services and PostgreSQL schemas** with optimized tables and indexing, in an Agile team.',
      '**Built a full-featured marketing email system** powered by AWS SES and React, bypassing Gmail integration constraints and adhering strictly to GDPR compliance standards.',
      '**Automated QA cases previously considered impossible** with Python and Jupyter test scripts, saving the QA team significant time.',
      '**Raised code coverage with Jest unit tests** that catch regressions before release.',
    ],
  },
  {
    role: 'Software Engineering Trainee',
    company: 'Intahub (Pvt) Ltd',
    companyUrl: 'https://intahub.com/',
    period: 'Sep 2021 — Feb 2022',
    stack: 'Angular · Ionic · Express.js · Spring Boot · Colombo, Sri Lanka',
    summary: 'Built proof-of-concept systems across cloud, desktop and mobile.',
    highlights: [
      '**Built POC systems for cloud and desktop environments** using Angular, Express.js, Spring Boot, and Bootstrap.',
      "**Developed key features for Intahub's first mobile POS application** using Angular and the Ionic Framework.",
    ],
  },
  {
    role: 'Software Engineer Trainee',
    company: 'SoftVessel (Pvt) Ltd',
    companyUrl: 'https://www.softvessel.com/',
    period: 'Feb 2021 — Jul 2021',
    stack: 'React · Redux · Node.js · GraphQL · MongoDB · Galle, Sri Lanka',
    summary: 'First role — focused on pixel-perfect frontend delivery.',
    highlights: [
      '**Built a student registration system and dashboard** using React, Redux, Node.js, GraphQL, and MongoDB.',
      '**Automated scheduled email notifications** using AWS SES.',
      '**Developed responsive frontend interfaces** from design specifications, matching them pixel for pixel.',
    ],
  },
]

export type EducationItem = {
  qualification: string
  institution: string
  tag: string
  detail?: string
}

export const education: EducationItem[] = [
  {
    qualification: 'BSc (Hons) in Software Engineering',
    institution: 'University of Kelaniya, Sri Lanka',
    tag: 'Jan 2019 — Aug 2023',
    detail: 'Second Class Upper Division · GPA 3.54 / 4.0',
  },
  {
    qualification: 'React Base — Industrial Training',
    institution: 'SoftVessel (Pvt) Ltd',
    tag: 'Sep 2020 — Feb 2021',
    detail: 'Industrial training in React, Redux and modern frontend delivery',
  },
  {
    qualification: 'Comprehensive Master Java Developer (Professional)',
    institution: 'IJSE — Institute of Software Engineering, Galle',
    tag: 'Professional Diploma',
    detail: 'Professional software engineering diploma',
  },
  {
    qualification: 'GCE Advanced Level — Physical Science',
    institution: 'Mahinda College, Galle',
    tag: 'GCE A/L',
    detail: 'Combined Maths: A · Physics: A · Chemistry: C',
  },
  {
    qualification: 'GCE Ordinary Level',
    institution: 'Mahinda College, Galle',
    tag: 'GCE O/L',
    detail: '7 A’s and 2 B’s',
  },
]

export type CertificationItem = {
  name: string
  issuer: string
  /** Optional issuer website. */
  issuerUrl?: string
  /** e.g. "Mar 2025" or "Mar 2025 — Mar 2028". Omit to hide the date pill. */
  issued?: string
  /** Vendor mark shown on the card. */
  issuerKey?: 'aws' | 'google' | 'oracle'
  /** Public credential / verification link. */
  credentialUrl?: string
  /** Optional short note or skill list. */
  detail?: string
}

/**
 * Licenses & certifications (mirrors the LinkedIn "Licenses & certifications"
 * section). The Certifications section hides itself while this list is empty.
 */
export const certifications: CertificationItem[] = [
  {
    name: 'Oracle Cloud Infrastructure Foundations 2021 Associate',
    issuer: 'Oracle',
    issuerUrl: 'https://education.oracle.com/oracle-certification-program',
    issuerKey: 'oracle',
    issued: 'Nov 2021',
    credentialUrl:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=2D812FD3978C38DD4347691C1A2B607EC3E47B37B6D69B6AC4558C8885ED1224',
  },
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services Training and Certification',
    issuerUrl: 'https://aws.amazon.com/training/',
    issuerKey: 'aws',
    credentialUrl: 'https://www.credly.com/badges/6156d558-d179-4de5-8851-e915f58e76f6/linked_in_profile',
  },
  {
    name: 'AWS Fundamentals: Going Cloud-Native',
    issuer: 'Amazon Web Services (via Coursera)',
    issuerUrl: 'https://www.coursera.org/',
    issuerKey: 'aws',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/M3CJ9HPAZFEN',
  },
  {
    name: 'AWS Fundamentals: Migrating to the Cloud',
    issuer: 'Amazon Web Services (via Coursera)',
    issuerUrl: 'https://www.coursera.org/',
    issuerKey: 'aws',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7VLB2YLSN7N7',
  },
  {
    name: 'AWS Fundamentals: Building Serverless Applications',
    issuer: 'Amazon Web Services (via Coursera)',
    issuerUrl: 'https://www.coursera.org/',
    issuerKey: 'aws',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/F59TH74J4DF2',
  },
  {
    name: 'Essential Google Cloud Infrastructure: Core Services',
    issuer: 'Google Cloud (via Coursera)',
    issuerUrl: 'https://www.coursera.org/',
    issuerKey: 'google',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/KMP9AV296XKY',
  },
]

export type SkillGroup = {
  category: string
  blurb: string
  skills: { name: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    blurb: 'The core of everything I ship.',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    blurb: 'Scalable, cost-aware AWS systems.',
    skills: [
      { name: 'AWS' },
      { name: 'Lambda' },
      { name: 'SES' },
      { name: 'SQS' },
      { name: 'CloudWatch' },
      { name: 'EC2 / ECS' },
      { name: 'ECR' },
      { name: 'RDS' },
      { name: 'CodePipeline' },
      { name: 'Docker' },
      { name: 'Serverless' },
      { name: 'CI/CD' },
    ],
  },
  {
    category: 'Databases & Architecture',
    blurb: 'Designing systems that hold up at scale.',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'Event-Driven Architecture' },
      { name: 'System Design' },
      { name: 'Performance Optimization' },
    ],
  },
  {
    category: 'AI & Automation',
    blurb: 'Using AI to raise team velocity.',
    skills: [
      { name: 'AI-Assisted Development' },
      { name: 'GitHub Copilot' },
      { name: 'Claude' },
      { name: 'Test Automation (Jest)' },
      { name: 'Workflow Automation' },
    ],
  },
  {
    category: 'Leadership & Methods',
    blurb: 'How I help teams deliver.',
    skills: [
      { name: 'Technical Leadership' },
      { name: 'Mentorship' },
      { name: 'Code Review' },
      { name: 'Cross-Functional Collaboration' },
      { name: 'Agile Development' },
    ],
  },
  {
    category: 'Tools',
    blurb: 'Day-to-day delivery toolkit.',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Jira' },
      { name: 'Postman' },
    ],
  },
]

