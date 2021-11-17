import React from 'react'

import { MainLayoutStyles as ML } from './styles'
import { animation as a } from './animation'

interface Props {
  children: React.ReactNode
  location: Location
}

export const MainLayout: React.FC<Props> = props => {
  const { children, location } = props

  return (
    <ML.MainLayout key={location.pathname} initial={'initial'} animate={'in'} exit={'exit'} variants={a.layout}>
      {children}
    </ML.MainLayout>
  )
}
