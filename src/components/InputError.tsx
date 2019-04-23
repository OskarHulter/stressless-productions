import * as React from 'react'

interface InputErrorProps extends React.Props<InputErrorProps> {
    className: string,
    errorMessage: string,
    typographyClass: string
}

const InputError: React.FC<InputErrorProps> = props => {
    const cssClasses = `${props.typographyClass} ${props.className}`

    if (!props.errorMessage) { return null }

    return (
        <div className={cssClasses}>
            {props.errorMessage}
        </div>
    )
}

InputError.defaultProps = {
    className: '',
    errorMessage: '',
    typographyClass: 'large-heading red-heading smaller-font-size unselectable'
}

export default InputError