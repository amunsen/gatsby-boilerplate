import React from 'react'

import { ThemeProvider } from 'context/'
import { GlobalStyles as Gs } from 'common/styles/common'
import { MainHeader } from 'components/MainHeader'

interface Props {
  children: React.ReactNode
}

export const PageWrapper: React.FC<Props> = props => {
  const { children } = props
  return (
    <ThemeProvider>
      <Gs />
      <MainHeader />
      {children}
    </ThemeProvider>
  )
}
