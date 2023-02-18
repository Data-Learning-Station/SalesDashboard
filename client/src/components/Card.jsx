const Card = ({ className, children }) => {
    return (
        <div className={`${className} p-4 bg-white rounded-md border border-slate-100`}>
            {children}
        </div>
    )
}

export default Card