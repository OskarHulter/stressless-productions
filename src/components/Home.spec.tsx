import * as React from 'react'
import { render } from 'react-testing-library'
import { Home } from './Home'

const props = {
  labelText: 'I am a label'
}

describe('Home', () => {
  it('renders without throwing an error', () => {
    const { getByText } = render(<Home {...props} />)

    getByText(props.labelText)
  })
})
