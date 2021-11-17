import styled from 'styled-components'
import { applyModifiers } from 'common/functions/'

import { T_Spacing } from 'common/types'
import { Modifiers, T_TextModifiers } from './TextModifiers'
import { T_TextType } from '../'

export interface I_Text {
  type?: T_TextType
  modifiers?: T_TextModifiers[]
  spacingTop?: T_Spacing
  spacingBottom?: T_Spacing
  spacingLeft?: T_Spacing
  spacingRight?: T_Spacing
}

const Text = styled.div<I_Text>`
  ${(props) => applyModifiers(Modifiers, props.modifiers)}
`

const TextStyles = {
  Text
}

export { TextStyles }
