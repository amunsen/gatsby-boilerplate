import { FlattenInterpolation, ThemeProps } from 'styled-components'

export function applyModifiers<T extends ThemeProps<T>>(
  options: {
    [k: string]: (props?: any) => FlattenInterpolation<any>
  },
  modifiers: string[] | undefined | null
) {
  if (modifiers !== undefined && modifiers !== null) {
    return modifiers.map((mod) => {
      return options[mod]
    })
  }
}
