import styled, { css } from 'styled-components'

import { BreakpointsSizes } from 'common/constants/breakpoints'
import { applyModifiers } from 'common/functions'
import { breaks } from 'common/styles/settings'

export type T_GridPoints = { [key in BreakpointsSizes]?: { start?: number; end?: number; span?: number } }
type T_GridItem = keyof typeof Modifiers

export interface I_GridItem {
  responsive?: T_GridPoints
  modifiers?: T_GridItem[]
  justifyEndXs?: boolean
}

const Modifiers = {
  justifyEnd: (props: I_GridItem) => {
    const { justifyEndXs } = props
    return css`
      display: flex;
      justify-content: flex-end;

      ${breaks.xs.down} {
        justify-content: ${justifyEndXs ? 'initial' : 'flex-end'};
      }
    `
  },
  alignEnd: () => css`
    display: flex;
    align-items: flex-end;
  `
}

export const GridItem = styled.div<I_GridItem>`
  grid-row: auto;
  grid-column-start: 1;
  grid-column-end: 13;

  ${props => applyModifiers(Modifiers, props.modifiers)}
  ${props => gridBuilder(props.responsive)}
`

function gridBuilder(gridPoints: T_GridPoints | undefined) {
  if (gridPoints) {
    const providedBreakpoints = Object.keys(gridPoints) as BreakpointsSizes[]

    const renderGridpointSpanUndefined = (breakPoint: BreakpointsSizes) =>
      breakPoint === 'xs'
        ? css`
            ${breaks[breakPoint].down} {
              grid-column-start: ${gridPoints[breakPoint]?.start};
              grid-column-end: ${gridPoints[breakPoint]?.end};
            }
          `
        : css`
            ${breaks[breakPoint].up} {
              grid-column-start: ${gridPoints[breakPoint]?.start};
              grid-column-end: ${gridPoints[breakPoint]?.end};
            }
          `

    const renderGridpointSpanDefined = (breakPoint: BreakpointsSizes) =>
      breakPoint === 'xs'
        ? css`
            ${breaks.sm.down} {
              grid-column: ${gridPoints[breakPoint]?.start ? gridPoints[breakPoint]?.start : 'auto'} / span ${gridPoints[breakPoint]?.span};
            }
          `
        : css`
            ${breaks[breakPoint].up} {
              grid-column: ${gridPoints[breakPoint]?.start ? gridPoints[breakPoint]?.start : 'auto'} / span ${gridPoints[breakPoint]?.span};
            }
          `

    return providedBreakpoints.map((breakPoint: BreakpointsSizes) =>
      gridPoints[breakPoint]?.span === undefined ? renderGridpointSpanUndefined(breakPoint) : renderGridpointSpanDefined(breakPoint)
    )
  }
}
