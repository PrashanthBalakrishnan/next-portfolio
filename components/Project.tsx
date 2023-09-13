'use client'
import { projectsData } from '@/lib/data'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitHub,
  liveDemo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 group"
    >
      <section
        ref={ref}
        className="bg-gray-100 max-w-[42rem]  rounded-lg borderBlack overflow-hidden sm:pr-8 relative sm:h-[22rem]  last:mb-0  sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div className="pt-4 px-5 sm:pl-10 sm:pr-2 sm:pt-4 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-xl mt-1 font-semibold">{title}</h3>
          <p className=" text-sm leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap  gap-2 sm:mt-auto mb-10 ">
            {tags.map((tag, idx) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={idx}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mb-5 flex gap-2">
            <a
              className="bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/60 dark:hover:bg-white/40"
              href={gitHub}
              target="_blank"
            >
              Github
            </a>
            <a
              className="bg-gray-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/60 dark:hover:bg-white/40"
              href={liveDemo}
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project i worked on"
          quality={95}
          className="absolute hidden sm:block top-5 -right-40 w-[28.25rem] rounded-lg shadow-2xl 
        group-even:right-[initial] group-even:-left-40

        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-hover:scale-[1.04]
        transition
        "
        />
      </section>
    </motion.div>
  )
}
