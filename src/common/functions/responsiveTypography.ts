import { css, FlattenInterpolation, ThemeProps } from 'styled-components'

import { T_SizesType } from 'common/constants/typography'
import { TBreakpoints } from 'common/styles/settings/breakpoints'
import { breaks } from 'common/styles/settings'

export function responsiveTypography<T extends ThemeProps<any>>(sizes: T_SizesType): FlattenInterpolation<T> {
  const keySizes = Object.keys(sizes)

  // loop over array of keys
  // if key === xs set size as default size
  // otherwise set sizes via breakpoints
  return keySizes.map((key: string) => {
    if (key === 'xs') {
      return css`
        font-size: ${sizes[key]};
      `
    } else {
      const typedKey = key as TBreakpoints
      return css`
        ${breaks[typedKey].up} {
          font-size: ${sizes[key]};
        }
      `
    }
  })
}
