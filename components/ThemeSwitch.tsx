'use client'
import { useTheme } from '@/context/ThemeContext'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      aria-label="Toggle theme"
      className="fixed bottom-5 right-5  w-12 h-12 bg-opacity-80  border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all border bg-white backdrop-blur-[0.05rem] dark:bg-gray-950 dark:border-black/40"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
export default ThemeSwitch
