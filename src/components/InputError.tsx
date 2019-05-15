import * as React from 'react'

interface InputErrorProps extends React.Props<InputErrorProps> {
    errorMessage: string
}

const InputError: React.FC<InputErrorProps> = props => {
    if (!props.errorMessage) { return null }

    return (
        <div>
            {props.errorMessage}
        </div>
    )
}

InputError.defaultProps = {
    errorMessage: ''
}

export default InputError