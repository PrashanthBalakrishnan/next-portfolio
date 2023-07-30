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
      'As a proven leader and resource manager, I have consistently driven company objectives to success through effective leadership and strategic resource allocation. My expertise as an expert troubleshooter and solutions implementer allowed me to swiftly resolve system failures and bugs, ensuring uninterrupted functionality. By emphasizing comprehensive knowledge in repairs, customer service, problem-solving, and sales among technicians, I enhanced all customer interactions and satisfaction. My role as a customer-centric team lead led to remarkable achievements, culminating in our team being recognized as the number one Samsung Repair Store in the United States, a prestigious accolade that highlights our exceptional performance and dedication to excellence.',
    icon: React.createElement(CgWorkAlt),
    date: '2017 - 2019',
  },

  {
    title: 'Software Engineer - Blix',
    location: 'Jersey City, NJ',
    description:
      "I played a key role in developing responsive web pages for the BlueMail application, which boasts over 10 Million downloads. I also contributed to creating a support help page to enhance user-friendliness and troubleshoot bugs. The technologies employed included HTML, CSS, JavaScript, and React. The primary focus was on ensuring the website's responsiveness across various devices and browsers, while adhering to web accessibility guidelines to provide an inclusive user experience. To manage issues effectively, I documented user-reported and trending bugs in Jira, ensuring their timely resolution. Regular monitoring and benchmarking of user-reported bugs were conducted to maintain a seamless user experience. Additionally, I optimized the website's performance to reduce load times and enhance overall efficiency.",
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
