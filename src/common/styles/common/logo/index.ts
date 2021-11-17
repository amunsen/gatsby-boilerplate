import styled from 'styled-components'
import { pxToRem } from 'common/functions'
import { breaks } from 'common/styles/settings'

const Logo = styled.img`
  position: relative;
  z-index: 11;

  width: 100%;
  max-width: ${pxToRem(140)};

  ${breaks.md.up} {
    max-width: ${pxToRem(180)};
  }

  ${breaks.lg.up} {
    max-width: ${pxToRem(200)};
  }
`

export const LogoStyles = { Logo }
