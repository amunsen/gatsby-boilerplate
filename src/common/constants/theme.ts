import { Breakpoints } from './breakpoints'

export interface I_Theme {
  breakpoints: typeof Breakpoints
}

export const theme: Readonly<I_Theme> = {
  breakpoints: Breakpoints
}
