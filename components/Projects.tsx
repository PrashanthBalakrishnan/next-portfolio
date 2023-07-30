'use client'
import { projectsData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import Project from './Project'
import React from 'react'
import useSectionInView from '@/hooks/useSectionInView'

const Projects = () => {
  const { ref } = useSectionInView('Projects')
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
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
