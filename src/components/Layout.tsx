import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'
import { Content } from './Content'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Grid } from './Grid'

const theme = {
	colorPrimary: '#7037BF',
	colorSecondary: '#FF83C6',
	colorBackground: '#0057AC',
	colorText: '#E8CCC3',
	colorAffirmative: '#11819C',
	colorNegative: '#D92563',
	colorCaution: '#FEDF00',
	textFont:
		'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'
}

const GlobalStyle = createGlobalStyle`
  :root {
    --colorPrimary: ${props => props.theme.colorPrimary};
  	--colorSecondary: ${props => props.theme.colorSecondary};
  	--colorBackground: ${props => props.theme.colorBackground};
  	--colorText: ${props => props.theme.colorText};
  	--colorAffirmative: ${props => props.theme.colorAffirmative};
  	--colorNegative: ${props => props.theme.colorNegative};
  	--colorCaution: ${props => props.theme.colorCaution};
  	--textFont: ${props => props.theme.textFont};
  } 

  html {
    color: var(--colorText);
    background: var(--colorBackground);
    font-family: var(--textFont);
	}
`

/*
const colorPrimary = '#7037BF'
const colorSecondary = '#FF83C6'
const colorBackground = '#0057AC'
const colorText = '#E8CCC3'
const colorAffirmative = '#11819C'
const colorNegative = '#D92563'
const colorCaution = '#FEDF00'

const GlobalStyle = createGlobalStyle`
  :root {
    --colorPrimary: ${colorPrimary};
    --colorSecondary: ${colorSecondary};
    --colorBackground: ${colorBackground};
    --colorText: ${colorText};
    --colorAffirmative: ${colorAffirmative};
    --colorNegative: ${colorNegative};
    --colorCaution: ${colorCaution};
  } 

  html {
    color: var(--colorText);
    background: var(--colorBackground);
    font-family: ${p => p.theme.fontFamily};
  }
`
*/

export const Layout: React.FC = props => (
	<>
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
		</Head>
		<Grid>
			<Header />
			<Content>{props.children}</Content>
			<Footer />
		</Grid>
	</>
)
