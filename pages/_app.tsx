import App, { Container } from 'next/app'
import * as React from 'react'
import withApollo from '../src/lib/withApollo'
import { ApolloProvider } from 'react-apollo'

class MyApp extends App<any> {
	render() {
		const { Component, pageProps, apolloClient } = this.props
		return (
			<Container>
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
				</ApolloProvider>
			</Container>
		)
	}
}

export default withApollo(MyApp)
