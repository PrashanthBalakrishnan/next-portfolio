import React from 'react'
import { BsTools } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'

// Fullstack Projects
import eCommerce from '@/public/e-commerce-site.png'
import italizze from '@/public/italizze.png'
import getFit from '@/public/getFit.png'
import Aitools from '@/public/Aitools.png'
// UI Projects
import newsLetter from '@/public/ui-projects/NewsletterSignup.png'
import resultSummary from '@/public/ui-projects/resultSummary.png'
import orderSummary from '@/public/ui-projects/orderSummary.png'
import interactiveRating from '@/public/ui-projects/interactiveRating.png'
import signupChannel from '@/public/ui-projects/signupChannel.png'
import ageCalculator from '@/public/ui-projects/ageCalculator.png'
import calculatorApp from '@/public/ui-projects/calculatorApp.png'
import taskifyApp from '@/public/taskifyApp.png'
import faqAccordion from '@/public/ui-projects/faqAccordion.png'

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
    title: 'Taskify App',
    description:
      'Productivity Application that uses pomodoro technique to help users focus on their tasks.',
    tags: [
      'React',
      'TypeScript',
      'SCSS',
      'Github Actions',
      'Vitest',
      'Playwright',
    ],
    imageUrl: taskifyApp,
    gitHub: 'https://github.com/PrashanthBalakrishnan/toDoApp-frontendmentor',
    liveDemo: 'https://main--snazzy-khapse-3bad74.netlify.app/',
  },
  // {
  //   title: 'E-Commerce Website',
  //   description:
  //     'Front-end of an e-commerce website using Dashboard API to fetch products, categories and using Stripe API for payment processing.',
  //   tags: [
  //     'Next.js',
  //     'TypeScript',
  //     'TailwindCSS',
  //     'Zustand',
  //     'Axios',
  //     'Stripe',
  //   ],
  //   imageUrl: eCommerce,
  //   gitHub: 'https://github.com/PrashanthBalakrishnan/e-commerce-store',
  //   liveDemo: 'https://e-commerce-store-snowy-omega.vercel.app/',
  // },

  {
    title: 'ITALIZZE - Food Ordering Web app',
    description:
      'Fullstack application that allows users to order food from a restaurant and admin to manage orders and menu items.',
    tags: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Zustand',
      'Axios',
      'Stripe',
      'Prisma',
      'MongoDB',
      'NodeJs',
      'Next-Auth',
    ],
    imageUrl: italizze,
    gitHub:
      'https://github.com/PrashanthBalakrishnan/fullstack-food-ordering-app',
    liveDemo: 'https://fullstack-food-ordering-app-black.vercel.app/',
  },
  {
    title: 'AI tools',
    description:
      'Website that uses the power of openAI to create user friendly tools',
    tags: [
      'Next.js',
      'TypeScript',
      'NodeJs',
      'TailwindCSS',
      'Axios',
      'OpenAI API',
    ],
    imageUrl: Aitools,
    gitHub: 'https://github.com/PrashanthBalakrishnan/ai-tools',
    liveDemo: 'https://openaitools.vercel.app/',
  },
  {
    title: 'Gym Website',
    description:
      'A dynamic website designed for a local gym, showcasing their top-notch services and state-of-the-art facilities.',
    tags: ['Vite', 'Tailwind', 'Framer', 'Frame Motion'],
    imageUrl: getFit,
    gitHub: 'https://github.com/PrashanthBalakrishnan/getFit',
    liveDemo: 'https://get-fit-9f83.vercel.app/',
  },
] as const

export const uiProjectsData = [
  {
    title: 'Newsletter sign-up form',
    imageUrl: newsLetter,
    gitHub:
      'https://github.com/PrashanthBalakrishnan/newsletter-signup-component',
    liveDemo: 'https://golden-genie-c40727.netlify.app/',
  },
  {
    title: 'Results summary component',
    imageUrl: resultSummary,
    gitHub: 'https://github.com/PrashanthBalakrishnan/result-summary-component',
    liveDemo: 'https://reliable-manatee-f59b3b.netlify.app/',
  },
  {
    title: 'Order summary component',
    imageUrl: orderSummary,
    gitHub:
      'https://github.com/PrashanthBalakrishnan/order-summary-component-main',
    liveDemo: 'https://sprightly-sunshine-57bdf5.netlify.app/',
  },
  {
    title: 'Interactive rating component',
    imageUrl: interactiveRating,
    gitHub:
      'https://github.com/PrashanthBalakrishnan/Interactive-rating-component',
    liveDemo: 'https://interactive-rating-component-seven-eta.vercel.app/',
  },
  {
    title: 'Sign-up Channel',
    imageUrl: signupChannel,
    gitHub: 'https://github.com/PrashanthBalakrishnan/ui-signupchannel',
    liveDemo: 'https://ui-signupchannel.vercel.app/',
  },
  {
    title: 'Age Calculator',
    imageUrl: ageCalculator,
    gitHub: 'https://github.com/PrashanthBalakrishnan/age-calculator',
    liveDemo: 'https://verdant-tarsier-1fec6e.netlify.app/',
  },
  {
    title: 'Calculator App',
    imageUrl: calculatorApp,
    gitHub: 'https://github.com/PrashanthBalakrishnan/calculator-app',
    liveDemo: 'https://warm-puppy-3608cf.netlify.app/',
  },
  {
    title: 'FAQ Accordion',
    imageUrl: faqAccordion,
    gitHub: 'https://github.com/PrashanthBalakrishnan/accordion-frontendmentor',
    liveDemo: 'https://exquisite-flan-aedc86.netlify.app/',
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
