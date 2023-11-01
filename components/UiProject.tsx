import { uiProjectsData } from '@/lib/data'
import Image from 'next/image'

type UiProjectProps = (typeof uiProjectsData)[number]

const UiProject = ({ title, imageUrl, gitHub, liveDemo }: UiProjectProps) => {
  return (
    <section className="flex text-center">
      <div className=" flex flex-col items-center justify-start gap-5 bg-gray-100 p-3 max-w-[42rem]  rounded-lg borderBlack overflow-hidden hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white w-full">
        <h3 className="text-sm md:text-xl mt-1 ">{title}</h3>
        <Image
          className="w-[200px] h-[200px] object-cover rounded-xl"
          src={imageUrl}
          alt={title}
        />
        <div className="flex items-center gap-2">
          <a
            className="bg-gray-900 px-3 py-1 text-[0.5rem] md:text-[0.7rem] uppercase tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/60 dark:hover:bg-white/40"
            href={gitHub}
            target="_blank"
          >
            Github
          </a>
          <a
            className="bg-gray-900 px-3 py-1 text-[0.5rem] md:text-[0.7rem]  uppercase tracking-wider text-white rounded-md dark:text-white/70 hover:bg-black/60 dark:hover:bg-white/40"
            href={liveDemo}
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  )
}
export default UiProject
