'use client'
import SectionHeading from '@/components/SectionHeading'
import useSectionInView from '@/hooks/useSectionInView'
import { uiProjectsData } from '@/lib/data'
import React from 'react'
import UiProject from './UiProject'
import Link from 'next/link'

const UiProjects = () => {
  const { ref } = useSectionInView('Projects')
  return (
    <section className="flex items-center flex-col px-4 mb-20">
      <Link
        className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group dark:bg-black/70"
        href="/"
      >
        Go back
      </Link>
      <SectionHeading>UI projects</SectionHeading>
      <div
        className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 "
        ref={ref}
      >
        {uiProjectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <UiProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
export default UiProjects
