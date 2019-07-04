import App, { Container } from 'next/app'
import * as React from 'react'
import withApollo from '../src/lib/withApollo'
import { ApolloProvider } from 'react-apollo'
import { createGlobalStyle } from 'styled-components'

const colorPrimary: string = '#7037BF'
const colorSecondary: string = '#FF83C6'
const colorBackground: string = '#0057AC'
const colorText: string = '#E8CCC3'
const colorAffirmative: string = '#11819C'
const colorNegative: string = '#D92563'
const colorCaution: string = '#FEDF00'
const textFont: string =
	'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'

const GlobalStyle = createGlobalStyle`
  :root {
    --colorPrimary: ${colorPrimary};
    --colorSecondary: ${colorSecondary};
    --colorBackground: ${colorBackground};
    --colorText: ${colorText};
    --colorAffirmative: ${colorAffirmative};
    --colorNegative: ${colorNegative};
		--colorCaution: ${colorCaution};
		--textFont: ${textFont};
  } 

  body {
    color: var(--colorText);
    background: var(--colorBackground);
		font-family: var(--textFont);
		font-weight: 300;
  }
`

class MyApp extends App<any> {
	render() {
		const { Component, pageProps, apolloClient } = this.props
		return (
			<Container>
				<GlobalStyle />
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
				</ApolloProvider>
			</Container>
		)
	}
}

export default withApollo(MyApp)
