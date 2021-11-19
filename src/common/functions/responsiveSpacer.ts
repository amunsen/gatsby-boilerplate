import { Breakpoints } from 'common/constants/breakpoints'

export function responsiveSpacer(width: number) {
  if (width < Breakpoints.sm) return 'xl'
  if (width < Breakpoints.md) return 'xxl'
  if (width < Breakpoints.lg) return 'xxxl'
  else {
    return 'xxxl'
  }
}
