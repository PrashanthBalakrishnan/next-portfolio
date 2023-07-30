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
        Motivated and proficient professional seeking a challenging position to
        develop dynamic web applications with expertise in{' '}
        <span className="font-medium">
          HTML5/CSS3, JavaScript, TypeScript, React.js, NextJs Stack and Prisma.
        </span>{' '}
        Passionate about delivering exceptional user experiences and
        contributing to impactful projects. Eager to stay ahead in industry
        trends and continuously enhance skills.
      </p>
      <p>
        <span className="italic">Beyond coding</span>, I enjoy online chess,
        captivating movies, exploring diverse cuisines, and hiking in nature
        with loved ones. These enriching activities provide a refreshing balance
        to my work and foster well-being and fulfillment.
      </p>
    </motion.section>
  )
}
export default About
