import React from 'react'
import { TextStyles as TXT, I_Text } from './styles'

export type T_TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'span'

export interface TextProps extends I_Text {
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({ type, children, modifiers, spacingTop, spacingBottom, spacingLeft, spacingRight }) => {
  return (
    <TXT.Text
      as={type}
      modifiers={modifiers}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
      spacingLeft={spacingLeft}
      spacingRight={spacingRight}
    >
      {children}
    </TXT.Text>
  )
}
