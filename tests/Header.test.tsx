import * as React from 'react'
import { Header } from '../src/components/Header'
import { render, cleanup } from 'react-testing-library'

afterEach(cleanup)

test('should render app', () => {
	render(<Header />)
})
