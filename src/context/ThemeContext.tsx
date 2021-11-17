import React, { useState, createContext } from 'react'

interface ThemeProviderProps {
  children: any
}

export interface I_ContextState {
  mainHeaderHeight: number
}

const defaultState = {
  mainHeaderHeight: 0,
  setMainHeaderHeight: (height: number) => {}
}

export const ThemeContext = createContext(defaultState)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, setState] = useState<I_ContextState>(defaultState)

  const setMainHeaderHeight = (height: number) => {
    setState((s) => ({ ...s, mainHeaderHeight: height }))
  }

  return (
    <>
      <ThemeContext.Provider value={{ ...state, setMainHeaderHeight }}>
        <>{children}</>
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
