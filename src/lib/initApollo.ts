import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject
} from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { isBrowser } from './isBrowser'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

if (!isBrowser) {
	(global as any).fetch = fetch
}

interface Options {
	getToken: () => string
}

function create(initialState: any, { getToken }: Options) {
	const httpLink = createHttpLink({
		uri: 'http://localhost:4000/graphql',
		credentials: 'include'
	})

	const authLink = setContext((_, { headers }) => {
		const token = getToken()
		return {
			headers: {
				...headers,
				cookie: token ? `qid=${token}` : ""
			}
		}
	})

	return new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser,
		link: authLink.concat(httpLink),
		cache: new InMemoryCache().restore(initialState || {})
	})
}

export default function initApollo(initialState: any, options: Options) {

	if (!isBrowser) {
		return create(initialState, options)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState, options)
	}

	return apolloClient
}
