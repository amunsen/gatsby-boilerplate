import { css } from 'styled-components'
import { Modifiers as Mods } from 'common/styles/modifiers'
import { pxToRem } from 'common/functions'
import { gaps } from 'common/styles/settings'
// deconstruct global modifiers
const {
  spacings: { spacingTop, spacingBottom, spacingLeft, spacingRight },
  display: { block, flex },
  alignItems: { alignCenter },
  font: {
    align: { fontAlignCenter, fontAlignRight },
    color: { colorInverted, colorSubtle },
    sizes: { advert, headline, subline, tertiary, paragraph, body, small, xSmall },
    transform: { textTransform }
  }
} = Mods

export type T_TextModifiers = keyof typeof Modifiers

export const Modifiers = {
  // text sizes
  advert,
  headline,
  subline,
  tertiary,
  paragraph,
  body,
  small,
  xSmall,
  // display
  block,
  // alignment
  fontAlignCenter,
  fontAlignRight,
  // spacings
  spacingTop,
  spacingBottom,
  spacingLeft,
  spacingRight,
  // colors
  colorInverted,
  colorSubtle,
  // transform values
  textTransform,

  lineHeight: () => css`
    line-height: 1.2;
  `,

  underLine: () => css`
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: ${gaps.l};
      left: 0;
      width: 100%;
      height: ${pxToRem(1)};
      background-color: grey;
    }
  `
}
