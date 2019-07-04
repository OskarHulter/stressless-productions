import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
	max-width: 1600px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 10px;
	padding-right: 10px;

	display: grid;
	grid-gap: 10px;
	grid-template-columns: 200px 200px 200px;
	grid-template-areas:
		'...... header header'
		'content content content'
		'footer footer footer';
`

export const Grid: React.FC = props => <StyledGrid />
