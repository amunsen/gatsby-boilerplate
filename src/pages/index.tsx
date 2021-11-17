import React from 'react'

import { MainLayout, PageWrapper } from 'layouts/'
import { Grid, GridItem } from 'components/Grid'
import { T_GridPoints } from 'components/Grid/styles/GridItem'

import { Teaser } from 'components/Teasers'

const responsive: { [key: string]: T_GridPoints } = {
  columnI: {
    md: { start: 2, span: 8 }
  }
}

interface Props {
  location: Location
}

const IndexPage: React.FC<Props> = props => {
  const { location } = props

  return (
    <PageWrapper>
      <MainLayout location={location}>
        <Teaser></Teaser>
      </MainLayout>
    </PageWrapper>
  )
}

export default IndexPage
