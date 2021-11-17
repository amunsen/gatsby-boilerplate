import React from 'react'
import { Grid, GridItem } from 'components/Grid'

interface Props {}

export const MainHeader: React.FC<Props> = props => {
  return (
    <Grid modifiers={['spacingTop', 'spacingBottom']} spacingTop={'xl'} spacingBottom={'xl'}>
      <GridItem responsive={{ xs: { span: 6 }, sm: { span: 6 } }}>hello</GridItem>
      <GridItem modifiers={['justifyEnd']} responsive={{ xs: { span: 6 }, sm: { span: 6 } }}>
        hello
      </GridItem>
    </Grid>
  )
}
