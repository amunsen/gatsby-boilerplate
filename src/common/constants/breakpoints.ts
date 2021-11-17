import { createStyleTools } from 'motyl'

export const breakpoints = {
  xs: '320px',
  sm: '600px',
  md: '900px',
  lg: '1200px'
}

export const {
  breakpoints: { up, down, between, only }
} = createStyleTools(breakpoints)

export type BreakpointsSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'xxxxl'

export const Breakpoints: { [key in BreakpointsSizes]: number } = {
  xs: 340,
  sm: 540,
  md: 768,
  lg: 1024,
  xl: 1366,
  xxl: 1680,
  xxxl: 1920,
  xxxxl: 2190
}
