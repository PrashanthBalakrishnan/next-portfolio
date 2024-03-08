'use client'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Meet Prashanth Balakrishnan, an accomplished Software Engineer based in
        Union, NJ, proficient in both{' '}
        <span className="font-medium italic">MEAN and MERN stacks</span>. With
        expertise in HTML, CSS, JavaScript, TypeScript, React, Angular, and
        more, Prashanth has contributed significantly to the development of
        scalable web applications at Blix in Jersey City. His commitment to web
        accessibility, collaborative approach with cross-functional teams, and
        meticulous testing practices have led to optimal functionality and
        innovation. As a Head Technician and Store Manager at UBreakiFix,
        Prashanth demonstrated strong leadership, efficient hardware
        troubleshooting, and customer-centric solutions. Holding a Bachelor's
        degree in Computer Science, AWS certification, and completing the
        Front-end Developer Career Path at Scrimba, Prashanth brings a
        well-rounded skill set and a proven track record, showcased in his
        portfolio.
      </p>
    </motion.section>
  )
}
export default About
