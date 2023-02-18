const Input = ({ placeholder, className = "", name = "", type = "text" }) => {
    return (
        <input className={`${className} px-3 py-2 bg-white border border-slate-200 rounded-md focus:border-blue-400 outline-none`} type={type} name={name} placeholder={placeholder} />
    )
}

export default Input