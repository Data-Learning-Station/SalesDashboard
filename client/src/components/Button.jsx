const Button = ({ className, onClick, children, disabled = false }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`${className} px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-all duration-150 ${disabled ? 'opacity-50' : ''}`}>
            {children}
        </button>
    )
}

export default Button