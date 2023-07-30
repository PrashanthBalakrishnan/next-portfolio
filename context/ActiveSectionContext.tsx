'use client'
import { SectionName } from '@/lib/types'
import { createContext, useContext, useState } from 'react'

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  // This usestate is used to prevent the active section from changing for a second when the user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}
export default ActiveSectionContextProvider

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    )
  }
  return context
}
