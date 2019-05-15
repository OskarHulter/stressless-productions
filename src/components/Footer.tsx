import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

const StyledFooter = styled.footer`
  color: red;
  background: purple;
`

export const Footer: React.FC = props =>
  <StyledFooter>
    <Title>Stressless productions</Title>
  </StyledFooter>
