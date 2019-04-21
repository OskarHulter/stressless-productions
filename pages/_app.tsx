import 'isomorphic-fetch'
import * as React from 'react'
import App, { Container } from 'next/app'

export default class extends App {
    static async getInitialProps({ Component, router, ctx }) {
        const server = !!ctx.req
        const store = e as any //getStore(undefined, server)
        const state = store.getState()
        const out = { state, server } as any

        if (Component.getInitialProps) {
            return {
                ...out,
                pageProps: {
                    ...(await Component.getInitialProps(ctx))
                }
            }
        }

        return out
    }

    render() {
        const { props } = this as any
        const { Component, pageProps } = props

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}
