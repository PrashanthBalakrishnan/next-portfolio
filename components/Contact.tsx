'use client'
import useSectionInView from '@/hooks/useSectionInView'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  const { ref } = useSectionInView('Contact')
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:prashbala13@gmail.com">
          prashbala13@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log(formData.get('senderEmail'))
          console.log(formData.get('message'))
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 resize-none"
          placeholder="Your message"
          required
          maxLength={500}
          name="message"
        />
        <button
          type="submit"
          className=" group h-[3rem] w-[8rem] flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </motion.section>
  )
}
export default Contact
