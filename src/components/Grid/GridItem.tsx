import React from 'react'
import { I_GridItem } from './styles/GridItem'
import { GridStyles as G } from './styles'

interface Props extends I_GridItem {
  children: React.ReactNode
  onClick?: () => void
}

export const GridItem: React.FC<Props> = props => {
  const { children, responsive, modifiers, justifyEndXs, onClick } = props

  return (
    <G.Item modifiers={modifiers} justifyEndXs={justifyEndXs} responsive={responsive} onClick={onClick}>
      {children}
    </G.Item>
  )
}
