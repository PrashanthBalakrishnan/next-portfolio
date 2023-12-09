import React from 'react'
import { BsTools } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'

// Fullstack Projects
import getFit from '@/public/getFit.png'
import eCommerce from '@/public/e-commerce-site.png'
import dashboard from '@/public/e-commerce-dashboard.png'

// UI Projects
import newsLetter from '@/public/ui-projects/NewsletterSignup.png'
import resultSummary from '@/public/ui-projects/resultSummary.png'
import orderSummary from '@/public/ui-projects/orderSummary.png'
import interactiveRating from '@/public/ui-projects/interactiveRating.png'
import signupChannel from '@/public/ui-projects/signupChannel.png'
import ageCalculator from '@/public/ui-projects/ageCalculator.png'
import calculatorApp from '@/public/ui-projects/calculatorApp.png'
import todoApp from '@/public/ui-projects/todoApp.png'

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
    title: 'Todo App',
    description:
      'A simple todo app built using React, TypeScript built with ability to edit, delete and add new todos.',
    tags: [
      'React',
      'TypeScript',
      'SCSS',
      'Vitest',
      'Github Actions',
      // 'Playwright',
    ],
    imageUrl: todoApp,
    gitHub: 'https://github.com/PrashanthBalakrishnan/toDoApp-frontendmentor',
    liveDemo: 'https://main--tranquil-clafoutis-3c4aa9.netlify.app/',
  },
  // {
  //   title: 'E-Commerce Website',
  //   description:
  //     'Front-end of an e-commerce website using Dashboard API to fetch products, categories and using Stripe API for payment processing.',
  //   tags: [
  //     'Next.js',
  //     'React',
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
  // {
  //   title: 'Dashboard for E-Commerce Website',
  //   description:
  //     'Backend focused dashboard to manage products, categories,orders and more for an e-commerce store.',
  //   tags: [
  //     'Next.js',
  //     'React',
  //     'TypeScript',
  //     'TailwindCSS',
  //     'Zustand',
  //     'shadcn/ui',
  //     'Clerk.dev',
  //     'Node Js',
  //   ],
  //   imageUrl: dashboard,
  //   gitHub: 'https://github.com/PrashanthBalakrishnan/admin-panel',
  //   liveDemo: 'https://e-commerce-admin-prashanthb.vercel.app/',
  // },
  {
    title: 'Gym Website',
    description:
      'A dynamic website designed for a local gym, showcasing their top-notch services and state-of-the-art facilities.',
    tags: ['Vite', 'Tailwind', 'Framer', 'Frame Motion'],
    imageUrl: getFit,
    gitHub: 'https://github.com/PrashanthBalakrishnan/getFit',
    liveDemo:
      'https://get-fit-9f83.vercel.app/',
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
    gitHub: 'https://github.com/PrashanthBalakrishnan/reviewCard',
    liveDemo: 'https://verdant-tarsier-1fec6e.netlify.app/',
  },
  {
    title: 'Calculator App',
    imageUrl: calculatorApp,
    gitHub: 'https://github.com/PrashanthBalakrishnan/calculator-app',
    liveDemo: 'https://warm-puppy-3608cf.netlify.app/',
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
