import Card from '../../components/Card'
import Button from '../../components/Button'
import { useProductContext } from '../../contexts/ProductContext'
import { useEffect } from 'react'
import ProductTable from './products/ProductTable'
import ProductModal, { useProductModalContext } from '../../modals/ProductModal'
import { createPortal } from 'react-dom'

const AdminProducts = () => {

    const { state, fetch, remove } = useProductContext()
    const { isShow, actions } = useProductModalContext()

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Card className="w-full">
                <div className="flex justify-between">
                    <h1 className='text-2xl font-bold'>Products</h1>
                    <Button onClick={() => actions.show()}> Add Product </Button>
                </div>

                <div className='mt-5'>
                    <ProductTable products={state.products} onDelete={remove}/>
                </div>
            </Card>
            {
                isShow && (
                    createPortal(
                        <ProductModal onClose={() => actions.hide()}/>,
                        document.getElementById('modal-root')
                    )
                )
            }
        </>
    )
}

export default AdminProducts