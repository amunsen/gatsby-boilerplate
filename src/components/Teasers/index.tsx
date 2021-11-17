import React, { useEffect, useState } from 'react'

import { useWindowSize } from 'hooks'
import { Breakpoints } from 'common/constants'

import { T_GridPoints } from 'components/Grid/styles/GridItem'
import { Grid, GridItem } from 'components/Grid'
import { Text } from 'components/Text'

const grid: { headline: T_GridPoints; body: T_GridPoints; content: T_GridPoints; imagery: T_GridPoints; tile: T_GridPoints } = {
  headline: {
    sm: { start: 1, span: 6 },
    lg: { start: 2, span: 8 }
  },
  body: {
    sm: { start: 1, span: 12 },
    lg: { start: 2, span: 10 }
  },
  content: {
    sm: { span: 5 },
    lg: { span: 4 }
  },
  imagery: {
    sm: { span: 7 },
    lg: { span: 8 }
  },
  tile: {
    xs: { span: 6 },
    sm: { span: 6 },
    xxxxl: { span: 4 }
  }
}

interface Props {}

export const Teaser: React.FC<Props> = props => {
  const { width } = useWindowSize()
  const { xs } = Breakpoints
  const [isBiggerThanXs, setIsBiggerThankXs] = useState<boolean>(false)

  useEffect(() => {
    if (width) {
      setIsBiggerThankXs(width > xs ? true : false)
    }
  }, [width])

  const renderGridTiles = () =>
    isBiggerThanXs && (
      <GridItem responsive={grid.imagery}>
        <Grid modifiers={['noPadding']}>
          <GridItem responsive={grid.tile}>
            <div style={{ backgroundColor: 'whitesmoke' }}>Hello</div>
          </GridItem>
          <GridItem responsive={grid.tile}>
            <div style={{ backgroundColor: 'whitesmoke' }}>HelloHello</div>
          </GridItem>
          <GridItem responsive={grid.tile}>
            <div style={{ backgroundColor: 'whitesmoke' }}>HelloHello</div>
          </GridItem>
        </Grid>
      </GridItem>
    )

  const renderDragTiles = () =>
    !isBiggerThanXs && (
      <div style={{ width: 300 * 3 }}>
        <div style={{ width: 300, height: 150, backgroundColor: 'red' }}></div>
      </div>
    )

  return (
    <>
      <Grid modifiers={['spacingTop']} spacingTop={'xxl'}>
        <GridItem responsive={grid.headline}>
          <Text type={'h2'} modifiers={['tertiary']}>
            Trial
          </Text>
        </GridItem>
        <GridItem responsive={grid.body}>
          <Grid modifiers={['noPadding']}>
            <GridItem responsive={grid.content}>
              Cordenka® Rayon is a plastic-free biobased high performance cellulose multifilament yarn for demanding technical applications.
            </GridItem>
            {renderGridTiles()}
          </Grid>
        </GridItem>
      </Grid>
      {renderDragTiles()}
    </>
  )
}
