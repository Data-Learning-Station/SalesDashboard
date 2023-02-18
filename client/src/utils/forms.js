export const parseFormData = (formData) => {
    const result = {}
    formData.forEach((value, key) => result[key] = value)
    return result
} 