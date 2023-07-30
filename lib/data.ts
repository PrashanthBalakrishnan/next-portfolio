import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import aiPrompts from '@/public/Ai-Prompts.png'
import aiService from '@/public/Ai-Service.png'
import getFit from '@/public/getFit.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Head Technician/Store Manager - UbreakiFix',
    location: 'Kearny, NJ',
    description:
      'Proven leader and resource manager driving company success through effective leadership and strategic allocation. Expert troubleshooter swiftly resolving system failures. Customer-centric team lead achieving remarkable results, recognized as the top Samsung Repair Store in the US, highlighting dedication to excellence.',
    icon: React.createElement(CgWorkAlt),
    date: '2017 - 2019',
  },

  {
    title: 'Software Engineer - Blix',
    location: 'Jersey City, NJ',
    description:
      "Key role in developing responsive web pages for BlueMail app (10M+ downloads). Created user-friendly support help page, used HTML, CSS, JavaScript, and React. Ensured website's responsiveness and adhered to web accessibility guidelines for inclusive user experience. Managed bugs in Jira, monitored and benchmarked user-reported issues for timely resolution. Optimized performance for reduced load times and improved efficiency..",
    icon: React.createElement(FaReact),
    date: '2019 - 2022',
  },
] as const

export const projectsData = [
  {
    title: 'Ai Service',
    description:
      'AI service is an web application that provdies services using openAI backend. ',
    tags: ['Next.js', 'OpenAi API', 'Tailwind', 'Prisma'],
    imageUrl: aiService,
  },
  {
    title: 'Ai Prompts',
    description:
      'Ai Prompts is a web application that allows users to create, share and Run limitless AI prompts.',
    tags: ['Next.js', 'OpenAi API', 'Tailwind', 'Prisma'],
    imageUrl: aiPrompts,
  },
  {
    title: 'Gym Website',
    description:
      'GetFit a website created for a local gym showcasing their services and facilities.',
    tags: ['React', 'Next.js', 'Tailwind', 'Framer'],
    imageUrl: getFit,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'SCSS',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'SQL',
  'Redux',
  'Express',
  'Jest & React Testing Library',
  'Python',
  'Framer Motion',
] as const
