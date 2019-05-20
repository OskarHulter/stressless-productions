import * as React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  grid-area: footer;
  background: --var(colorPrimary);
`

export const Footer: React.FC = props =>
  <StyledFooter>
    <h1>Stressless productions</h1>
  </StyledFooter>
