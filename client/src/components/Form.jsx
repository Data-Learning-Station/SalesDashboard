import { parseFormData } from "../utils/forms"

const Form = ({ className, children, onSubmit }) => {
    
    const submit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const result = parseFormData(formData)
        
        if (onSubmit) {
            onSubmit(result)
        }
    }
    
    return (
        <form className={`${className}`} onSubmit={submit}>
            {children}
        </form>
    )
}

export default Form