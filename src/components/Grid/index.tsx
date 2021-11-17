import React from 'react'

import { I_Grid } from './styles/Grid'
import { GridStyles as G } from './styles'

export { GridItem } from './GridItem'

interface Props extends I_Grid {
  children: React.ReactNode
}

export const Grid: React.FC<Props> = props => {
  const { children, modifiers, spacingTop, spacingBottom } = props
  return (
    <G.Grid modifiers={modifiers} spacingTop={spacingTop} spacingBottom={spacingBottom}>
      {children}
    </G.Grid>
  )
}
