interface ButtonProps {
    label: string
    onClick: () => void
    disabled: boolean
}

const Button = ({ label, onClick, disabled }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
