const Alert = ({ children }) => {
    return (
        <div className="p-2 bg-orange-100 text-black/50 text-xs rounded-md">
            {children}
        </div>
    )
}

export default Alert