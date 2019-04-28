import * as React from 'react'
import InputError from './InputError'

interface TextAreaInputProps extends React.Props<TextAreaInputProps> {
	labelText: string
	errorMessage: string
	value: string
	id: string
	placeholder: string
	className: string
	labelClassName: string
	disabled: boolean
	name: string
	handleOnChange: () => any
}

const TextAreaInput: React.FC<TextAreaInputProps> = props => {
	let inputClassName = `input${props.className ? ` ${props.className}` : ''}`
	const forId = props.id || props.name

	if (props.errorMessage) {
		inputClassName = `${inputClassName} red-border`
	}

	if (props.disabled) {
		inputClassName = `${inputClassName} disabled-input`
	}

	return (
		<>
			<label className={props.labelClassName} htmlFor={forId}>
				{props.labelText}
			</label>
			<textarea
				className={inputClassName}
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
	className: '',
	labelClassName: 'large-heading',
	disabled: false
}

export default TextAreaInput
