import * as React from 'react'
import styled from 'styled-components'

const StyledContent = styled.main`
	grid-area: content;
	background: --var(colorBackground);
`

export const Content: React.FC = props => (
	<StyledContent>
		<h4>This is the content</h4>
	</StyledContent>
)
