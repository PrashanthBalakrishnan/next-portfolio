'use client'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  return (
    <section
      className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <Image
            src="/profilePic.jpg"
            alt="Prashanth's profile portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="border-[.2rem] h-28 w-28 object-cover rounded-tl-extraLarge rounded-br-extraLarge shadow-2xl shadow-black/40 dark:border-slate-800"
          />
        </motion.div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-bold">Hello, I'm Prashanth.</h1> I'm a
        <span className="font-bold"> Software Engineer</span> with
        <span className="font-bold"> 3 years</span> of experience. I enjoy
        building
        <span className="italic"> sites & web applications.</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center  items-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group dark:bg-black/70"
          onClick={() => {
            setActiveSection('Contact')
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer borderBlack dark:bg-white/10"
          href="/PrashanthBalakrishnanResume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center rounded-full gap-2 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-gray-200 "
          href="https://www.linkedin.com/in/prashanth-bala/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center rounded-full gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-gray-200 "
          href="https://github.com/PrashanthBalakrishnan"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center rounded-full gap-2 text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-gray-200 "
          href="https://codepen.io/prashanthbalakrishnan"
          target="_blank"
          aria-label="Codepen"
        >
          <FaCodepen />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
