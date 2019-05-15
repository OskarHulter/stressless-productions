import * as React from 'react'
import InputError from './InputError'

interface TextAreaInputProps extends React.Props<TextAreaInputProps> {
	labelText: string
	errorMessage: string
	value: string
	id: string
	placeholder: string
	labelClassName: string
	disabled: boolean
	name: string
	handleOnChange: () => any
}

const TextAreaInput: React.FC<TextAreaInputProps> = props => {
	const forId = props.id || props.name

	return (
		<>
			<label className={props.labelClassName} htmlFor={forId}>
				{props.labelText}
			</label>
			<textarea
				id={forId}
				disabled={props.disabled}
				onChange={props.handleOnChange}
			/>
			<InputError errorMessage={props.errorMessage} />
		</>
	)
}

TextAreaInput.defaultProps = {
	labelText: '',
	errorMessage: '',
	placeholder: '',
	labelClassName: 'large-heading',
	disabled: false
}

export default TextAreaInput
