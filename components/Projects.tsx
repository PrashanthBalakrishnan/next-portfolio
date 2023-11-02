'use client'
import { projectsData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import Project from './Project'
import React from 'react'
import useSectionInView from '@/hooks/useSectionInView'
import Link from 'next/link'

const Projects = () => {
  const { ref } = useSectionInView('Projects')
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      <Link
        className="bg-gray-900 text-white px-7 py-3 mb-5 flex text-center justify-center w-1/2 mx-auto gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition group dark:bg-white/90 dark:text-black"
        href="/uiprojects"
      >
        View my UI projects
      </Link>

      <div ref={ref}>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
export default Projects
