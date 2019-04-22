import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject
} from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const isBrowser: boolean = (process as any).browser

if (!isBrowser) {
	;(global as any).fetch = fetch
}

interface Options {
	getToken: () => string
}

function create(initialState:any, { getToken }: Options) {
		const httpLink: createHttpLink({
			uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn',
			credentials: 'same-origin',
	})

	const authLink = setContext((_, {headers}) => {
		const token = getToken()
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : ""
			}
		}
	})
	
	return new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
		link: authLink.concat(httpLink),
		cache: new InMemoryCache().restore(initialState || {})
	})
}
export default function initApollo(initialState: any, options: Options) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!isBrowser) {
		return create(initialState, options)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState, options)
	}

	return apolloClient
}
