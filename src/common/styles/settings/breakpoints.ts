export const breakpoints = { xs: 320, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400, xxxl: 1600, xxxxl: 2400 }
export type TBreakpoints = keyof typeof breakpoints

const breakpointKeys = Object.keys(breakpoints) as TBreakpoints[]
let breaks = {} as { [key in TBreakpoints]: { up: string; down: string } }

breakpointKeys.map(
  (bp: TBreakpoints) => (breaks[bp] = { up: `@media (min-width: ${breakpoints[bp]}px)`, down: `@media (max-width: ${breakpoints[bp]}px)` })
)

export { breaks }
