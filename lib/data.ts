import React from 'react'
import { BsTools } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import aiService from '@/public/Ai-Service.png'
import getFit from '@/public/getFit.png'
import eCommerce from '@/public/e-commerce-site.png'
import dashboard from '@/public/e-commerce-dashboard.png'

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
    icon: React.createElement(BsTools),
    date: '2017 - 2019',
  },

  {
    title: 'Software Engineer - Blix',
    location: 'Jersey City, NJ',
    description:
      "Key role in developing responsive web pages for BlueMail app (10M+ downloads). Created user-friendly support help page, used HTML, CSS, JavaScript, and React. Ensured website's responsiveness and adhered to web accessibility guidelines for inclusive user experience. Managed bugs in Jira, monitored and benchmarked user-reported issues for timely resolution. Optimized performance for reduced load times and improved efficiency.",
    icon: React.createElement(FaReact),
    date: '2019 - 2022',
  },
] as const

export const projectsData = [
  {
    title: 'AI Service',
    description:
      'AI Service allows you to interact with OpenAI API to generate image, create code, and answer questions.',
    tags: ['Next.js', 'OpenAi API', 'Tailwind', 'Prisma'],
    imageUrl: aiService,
    gitHub: 'https://github.com/PrashanthBalakrishnan/saas-ai',
    liveDemo: 'https://ai-service-kappa.vercel.app/',
  },
  {
    title: 'E-Commerce Website',
    description:
      'Front-end of an e-commerce website using Dashboard API to fetch products, categories and using Stripe API for payment processing.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Zustand',
      'Axios',
      'Stripe',
    ],
    imageUrl: eCommerce,
    gitHub: 'https://github.com/PrashanthBalakrishnan/e-commerce-store',
    liveDemo: 'https://e-commerce-store-snowy-omega.vercel.app/',
  },
  {
    title: 'Dashboard to Manage e-commerce store',
    description:
      'Backend focused dashboard to manage products, categories,orders and more for an e-commerce store.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Zustand',
      'Axios',
      'Stripe',
      'shadcn/ui',
      'Clerk.dev',
      'React-Hot-Toast',
      'Zod',
    ],
    imageUrl: dashboard,
    gitHub: 'https://github.com/PrashanthBalakrishnan/admin-panel',
    liveDemo: 'https://e-commerce-admin-prashanthb.vercel.app/',
  },
  {
    title: 'Gym Website',
    description:
      'A dynamic website designed for a local gym, showcasing their top-notch services and state-of-the-art facilities.',
    tags: ['Vite', 'Tailwind', 'Framer', 'Frame Motion'],
    imageUrl: getFit,
    gitHub: 'https://github.com/PrashanthBalakrishnan/getFit',
    liveDemo:
      'https://get-fit-9f83-hftmrp7a7-prashanthbalakrishnan.vercel.app/',
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
