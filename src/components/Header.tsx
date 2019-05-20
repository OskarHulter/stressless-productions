import * as React from 'react'
import { Nav } from './Nav'
import styled from 'styled-components'

const StyledHeader = styled.header`
:root {
    --colorPrimary: ${props => props.theme.colorPrimary};
    --colorSecondary: ${props => props.theme.colorSecondary};
    --colorBackground: ${props => props.theme.colorBackground};
    --colorText: ${props => props.theme.colorText};
    --colorAffirmative: ${props => props.theme.colorAffirmative};
    --colorNegative: ${props => props.theme.colorNegative};
    --colorCaution: ${props => props.theme.colorCaution};
  } 
  html {
    color: var(--colorText);
    background: var(--colorBackground);
    font-family: ${p => p.theme.fontFamily}
	}
	
	grid-area: header;
  color: var(--colorSecondary);
	background: var(--colorPrimary);
`
export const Header: React.FC = props =>
	<StyledHeader>
		<h2>Stressless Productions</h2>
		<Nav />
	</StyledHeader>

