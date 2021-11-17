import { css } from 'styled-components'

import { spacers } from 'common/constants'
import { T_Padding } from 'common/types'
import { responsiveTypography } from 'common/functions'
import { textSizes } from './modules/'

export const Modifiers = {
  position: {
    absoluteFull: () => css`
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `
  },
  display: {
    block: () => css`
      display: block;
    `,
    inlineBlock: () => css`
      display: inline-block;
    `,
    flex: () => css`
      display: flex;
    `
  },
  alignItems: {
    alignCenter: () => css`
      align-items: center;
    `
  },
  justifyContent: {
    spaceBetween: () => css`
      justify-content: space-between;
    `,
    justifyCenter: () => css`
      justify-content: center;
    `
  },
  gradient: {
    whiteToTransparent: () => css`
      background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    `
  },
  spacings: {
    spacingTop: ({ spacingTop }: { spacingTop: T_Padding }) => css`
      padding-top: ${spacingTop ? spacers[spacingTop] : spacers.l};
    `,
    spacingBottom: ({ spacingBottom }: { spacingBottom: T_Padding }) => css`
      padding-bottom: ${spacingBottom ? spacers[spacingBottom] : spacers.l};
    `,
    spacingRight: ({ spacingRight }: { spacingRight: T_Padding }) => css`
      padding-right: ${spacingRight ? spacers[spacingRight] : spacers.l};
    `,
    spacingLeft: ({ spacingLeft }: { spacingLeft: T_Padding }) => css`
      padding-left: ${spacingLeft ? spacers[spacingLeft] : spacers.l};
    `
  },
  flex: {
    alignCenter: () => css`
      align-items: center;
    `
  },
  font: {
    transform: {
      textTransform: () => css`
        text-transform: uppercase;
        letter-spacing: 0.1rem;
      `
    },
    align: {
      fontAlignCenter: () => css`
        text-align: center;
      `,
      fontAlignLeft: () => css`
        text-align: left;
      `,
      fontAlignRight: () => css`
        text-align: right;
      `
    },
    color: {
      colorInverted: () => css`
        color: white;
      `,
      colorSubtle: () => css`
        color: #c4c4c4;
      `
    },
    sizes: {
      advert: () => css`
        ${textSizes.advert.general}
        ${responsiveTypography(textSizes.advert.sizes)}
      `,
      headline: () => css`
        ${textSizes.headline.general}
        ${responsiveTypography(textSizes.headline.sizes)}
      `,
      subline: () => css`
        ${textSizes.subline.general}
        ${responsiveTypography(textSizes.subline.sizes)}
      `,
      tertiary: () => css`
        ${textSizes.sublineSecondary.general}
        ${responsiveTypography(textSizes.sublineSecondary.sizes)}
      `,
      paragraph: () => css`
        ${textSizes.paragraph.general}
        ${responsiveTypography(textSizes.paragraph.sizes)}
      `,
      body: () => css`
        ${textSizes.body.general}
        ${responsiveTypography(textSizes.body.sizes)}
      `,
      small: () => css`
        ${textSizes.small.general}
        ${responsiveTypography(textSizes.small.sizes)}
      `,
      xSmall: () => css`
        ${textSizes.xSmall.general}
        ${responsiveTypography(textSizes.xSmall.sizes)}
      `
    }
  }
}
