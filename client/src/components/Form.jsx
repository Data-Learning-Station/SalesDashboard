import { parseFormData } from "../utils/forms"

const Form = ({ className, children, mode = 'form-data', onSubmit }) => {
    
    const submit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        
        if (onSubmit) {
            if (mode == 'form-data') {
                onSubmit(formData)
            }
            else if (mode == 'raw') {
                const raw = parseFormData(formData)
                onSubmit(raw)
            }
        }
    }
    
    return (
        <form className={`${className}`} onSubmit={submit}>
            {children}
        </form>
    )
}

export default Form