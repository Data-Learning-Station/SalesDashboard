const variants = {
    'default': "px-3 py-2",
    'small': "px-2 py-1 text-sm"
}

const Button = ({ className, onClick, type = "submit", variant='default', children, disabled = false }) => {

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={`${className} ${variants[variant]} bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-all duration-150 ${disabled ? 'opacity-50' : ''}`}>
            {children}
        </button>
    )
}

export default Button