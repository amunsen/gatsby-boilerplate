import { css, ThemeProps, FlattenInterpolation } from 'styled-components'
import { pxToRem } from 'common/functions'

export type T_SizesType = { [key: string]: string }

export type T_TypoSettingsType = {
  [key: string]: {
    general?: FlattenInterpolation<ThemeProps<any>>
    sizes: T_SizesType
  }
}

export const typography: T_TypoSettingsType = {
  mega: {
    general: css`
      line-height: 1.1;
      font-weight: 600;
    `,
    sizes: {
      xs: pxToRem(100),
      sm: pxToRem(120),
      md: pxToRem(160),
      lg: pxToRem(240)
    }
  },
  advert: {
    general: css`
      line-height: 1.1;
      font-weight: 600;
    `,
    sizes: {
      xs: pxToRem(48),
      sm: pxToRem(56),
      md: pxToRem(56),
      lg: pxToRem(88),
      xl: pxToRem(112),
      xxl: pxToRem(136),
      xxxl: pxToRem(160)
    }
  },
  headline: {
    general: css`
      line-height: 1.1;
      font-weight: 600;
    `,
    sizes: {
      xs: pxToRem(32),
      sm: pxToRem(40),
      md: pxToRem(48),
      lg: pxToRem(64),
      xl: pxToRem(80),
      xxl: pxToRem(96)
    }
  },
  subline: {
    general: css`
      line-height: 1.15;
      font-weight: 600;
    `,
    sizes: {
      xs: pxToRem(30),
      sm: pxToRem(34),
      md: pxToRem(48),
      lg: pxToRem(56),
      xl: pxToRem(64)
    }
  },
  sublineSecondary: {
    general: css`
      line-height: 1.25;
      font-weight: 600;
    `,
    sizes: {
      xs: pxToRem(22),
      sm: pxToRem(24),
      md: pxToRem(26),
      lg: pxToRem(32),
      xl: pxToRem(32)
    }
  },
  paragraph: {
    general: css`
      font-weight: 500;
    `,
    sizes: {
      xs: pxToRem(17),
      sm: pxToRem(18),
      md: pxToRem(19),
      lg: pxToRem(20),
      xl: pxToRem(22),
      xxxl: pxToRem(26)
    }
  },
  body: {
    general: css`
      line-height: 1.45;
      font-weight: 400;
    `,
    sizes: {
      xs: pxToRem(15),
      sm: pxToRem(16),
      md: pxToRem(17),
      lg: pxToRem(18),
      xl: pxToRem(20)
    }
  },
  small: {
    general: css``,
    sizes: {
      xs: pxToRem(13),
      sm: pxToRem(13),
      md: pxToRem(13),
      lg: pxToRem(15),
      xl: pxToRem(17)
    }
  },
  xSmall: {
    general: css``,
    sizes: {
      xs: pxToRem(11),
      sm: pxToRem(12),
      md: pxToRem(12),
      lg: pxToRem(13),
      xl: pxToRem(15)
    }
  }
}
