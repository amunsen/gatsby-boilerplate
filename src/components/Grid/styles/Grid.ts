import styled, { css } from 'styled-components'

import { pxToRem, applyModifiers } from 'common/functions'
import { T_Padding } from 'common/types'
import { gaps, breaks } from 'common/styles/settings'
import { Modifiers as Mods } from 'common/styles/modifiers'

const {
  alignItems: { alignCenter },
  spacings: { spacingTop, spacingBottom }
} = Mods

type T_Grid = keyof typeof Modifiers_Grid

export interface I_Grid {
  modifiers?: T_Grid[]
  spacingTop?: T_Padding
  spacingBottom?: T_Padding
}

const Modifiers_Grid = {
  spacingTop,
  spacingBottom,
  alignCenter,
  fluid: () => css`
    max-width: initial;
    height: 100%;
    grid-template-columns: repeat(auto-fill, minmax(${pxToRem(48)}, 1fr));
  `,
  maxWidth: () => css`
    max-width: ${pxToRem(1600)};
    margin: 0 auto;
  `,
  noPadding: () => css`
    padding-left: 0;
    padding-right: 0;

    ${breaks.lg.up} {
      padding-left: 0;
      padding-right: 0;
    }
  `
}

export const Grid = styled.div<I_Grid>`
  display: grid;
  grid-row-gap: ${gaps.xl};
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column-gap: ${gaps.xl};
  padding-left: ${gaps.xl};
  padding-right: ${gaps.xl};
  height: inherit;
  max-width: 100vw;

  ${breaks.sm.up} {
    grid-row-gap: ${gaps.xxl};
    grid-column-gap: ${gaps.xxl};
  }

  ${breaks.lg.up} {
    grid-row-gap: ${gaps.xxl};
    grid-column-gap: ${gaps.xxxl};
    padding-left: ${gaps.xxl};
    padding-right: ${gaps.xxl};
  }

  ${props => applyModifiers(Modifiers_Grid, props.modifiers)}
`
