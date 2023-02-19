import BaseModal from "../components/BaseModal"
import Form from "../components/Form"
import Input from "../components/Input"
import Button from "../components/Button"
import { createContext, useContext } from "react"
import { useProductContext } from "../contexts/ProductContext"

export const ProductModalContext = createContext({ show: false, target: {} })

export const useProductModalContext = () => useContext(ProductModalContext)

const ProductModal = ({ target, onClose }) => {

    const isUpdate = target != null

    const { create, update } = useProductContext()

    const submit = async (data) => {
        if (isUpdate) {
            await update(target.id, data)
        }
        else {
            await create(data)
        }
        onClose()
    }

    return (
        <BaseModal>
            <Form onSubmit={submit} className="flex flex-col gap-2">
                
                <Input type="text" name="name" placeholder="Name" defaultValue={target?.name ?? ""}/>
                <Input type="number" name="price" placeholder="Price" defaultValue={target?.price ?? ""}/>
                <Input type="file" name="file" placeholder="File" />

                <div className="flex gap-2 mt-2">
                    <Button> { isUpdate ? 'Update' : 'Create' } </Button>
                    <Button type="reset" onClick={onClose}> Close </Button>
                </div>
            </Form>
        </BaseModal>
    )
}

export default ProductModal