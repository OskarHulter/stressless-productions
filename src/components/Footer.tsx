import * as React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`

const StyledFooter = styled.footer`
  color: red;
  background: purple;
`

interface FooterProps extends React.Props<FooterProps> {
  tagline: string
  contactDetails: string
  className: string
  disabled: boolean
}


export const Footer: React.FC<FooterProps> = props =>
  <StyledFooter>
    <Title>Stressless productions</Title>
  </StyledFooter>
