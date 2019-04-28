import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colorPrimary: '#7037BF',
  colorSecondary: '#FF83C6',
  colorBackground: '#0057AC',
  colorText: '#E8CCC3',
  colorAffirmative: '#11819C',
  colorNegative: '#D92563',
  colorCaution: '#FEDF00'
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
} 
body {
  color: var(--colorPrimary);
  background: var(--colorBackground);
}
`
export const Layout: React.FC = props =>
  <ThemeProvider theme={theme}>
    <GlobalStyle>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </GlobalStyle>
  </ThemeProvider>