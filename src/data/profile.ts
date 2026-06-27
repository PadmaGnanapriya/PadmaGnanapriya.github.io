/**
 * Single source of truth for all site content.
 * Edit values here — components read from this file.
 */

export const profile = {
  name: 'Padma Gnanapriya',
  headline: 'Full-Stack Engineer & Associate Tech Lead',
  tagline: 'Scalable Cloud Solutions',
  subheadline:
    'From a 2021 intern to leading engineering at Velaris — I design and ship enterprise-grade cloud platforms with Node.js, React and AWS.',
  location: 'Sri Lanka · Remote',
  email: 'padma.gnanapriya@velaris.io',
  // Drop your PDF at public/cv/Padma_Gnanapriya_CV.pdf (see README)
  cvPath: '/cv/Padma_Gnanapriya_CV.pdf',
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
  period: string
  current?: boolean
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Associate Tech Lead',
    company: 'Velaris',
    period: 'Jun 2026 — Present',
    current: true,
    summary:
      'Leading a squad delivering the core platform, owning architecture decisions and engineering quality across enterprise integrations.',
    highlights: [
      'Set technical direction and review architecture for enterprise integration initiatives.',
      'Mentor engineers and drive code quality, delivery cadence and on-call reliability.',
      'Own performance and cost optimization across the AWS-backed service fleet.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Velaris',
    period: 'Jun 2024 — Jun 2026',
    summary:
      'Built and scaled customer-facing platform features and enterprise integrations end to end.',
    highlights: [
      'Designed and delivered enterprise integrations connecting the platform to third-party systems.',
      'Led performance optimization work, cutting key API latencies and improving throughput at scale.',
      'Shipped React front-end features and Node.js services with a strong focus on reliability.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Velaris',
    period: '2022 — Jun 2024',
    summary:
      'Grew from contributor to feature owner across the full stack of the product.',
    highlights: [
      'Delivered full-stack features across React, Node.js and cloud infrastructure.',
      'Improved test coverage and CI reliability to support a faster release cycle.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Velaris',
    period: '2021 — 2022',
    summary:
      'Started my professional journey, contributing to production features while learning the craft.',
    highlights: [
      'Shipped first production features and learned modern engineering practices.',
      'Built a foundation in JavaScript/TypeScript, React and backend development.',
    ],
  },
]

export type SkillGroup = {
  category: string
  blurb: string
  skills: { name: string; icon?: string }[]
}

// Icons live in /public/images/skill-*.webp (omit `icon` to render text-only)
export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend & APIs',
    blurb: 'Service design, data and integration layers.',
    skills: [
      { name: 'Node.js', icon: '/images/skill-node.webp' },
      { name: 'Express', icon: '/images/skill-express.webp' },
      { name: 'TypeScript', icon: '/images/skill-typescript.webp' },
      { name: 'GraphQL', icon: '/images/skill-graphql.webp' },
      { name: 'Apollo', icon: '/images/skill-apollo.webp' },
      { name: 'Java / Spring Boot', icon: '/images/skill-springboot.webp' },
      { name: 'Python', icon: '/images/skill-python.webp' },
    ],
  },
  {
    category: 'Frontend',
    blurb: 'Accessible, performant interfaces.',
    skills: [
      { name: 'React', icon: '/images/skill-react.webp' },
      { name: 'Redux', icon: '/images/skill-redux.webp' },
      { name: 'TypeScript', icon: '/images/skill-typescript.webp' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    blurb: 'Scalable, cost-aware AWS systems.',
    skills: [
      { name: 'AWS', icon: '/images/skill-aws.webp' },
      { name: 'Amazon Services', icon: '/images/skill-amazon.webp' },
      { name: 'Nginx', icon: '/images/skill-nginx.webp' },
    ],
  },
  {
    category: 'Data',
    blurb: 'Relational and document stores.',
    skills: [
      { name: 'MongoDB', icon: '/images/skill-mongo.webp' },
      { name: 'MySQL', icon: '/images/skill-mysql.webp' },
      { name: 'Firebase', icon: '/images/skill-firebase.webp' },
    ],
  },
  {
    category: 'Tooling & Collaboration',
    blurb: 'Day-to-day delivery toolkit.',
    skills: [
      { name: 'Git', icon: '/images/skill-git.webp' },
      { name: 'Postman', icon: '/images/skill-postman.webp' },
      { name: 'Jira', icon: '/images/skill-jira.webp' },
    ],
  },
]

export type GalleryCategory = 'office' | 'university'

export type GalleryImage = {
  src: string
  alt: string
  category: GalleryCategory
}

/**
 * Drop photos into:
 *   public/gallery/office/      → category "Office Vibe"
 *   public/gallery/university/  → category "University Days"
 * then list them here. Paths are relative to /public.
 */
export const galleryImages: GalleryImage[] = [
  { src: '/gallery/office/office-1.webp', alt: 'Team collaboration at Velaris', category: 'office' },
  { src: '/gallery/office/office-2.webp', alt: 'Leading a planning session', category: 'office' },
  { src: '/gallery/office/office-3.webp', alt: 'Pair programming with the squad', category: 'office' },
  { src: '/gallery/university/uni-1.webp', alt: 'University of Moratuwa campus', category: 'university' },
  { src: '/gallery/university/uni-2.webp', alt: 'Project showcase day', category: 'university' },
  { src: '/gallery/university/uni-3.webp', alt: 'With classmates at Moratuwa', category: 'university' },
]

export const galleryFilters: { key: GalleryCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'office', label: 'Office Vibe' },
  { key: 'university', label: 'University Days' },
]
