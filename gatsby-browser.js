import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './src/context/'

const TRANSITION_DELAY = 650

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}

export const wrapPageElement = ({ element }) => <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), TRANSITION_DELAY)
  }
  return false
}
