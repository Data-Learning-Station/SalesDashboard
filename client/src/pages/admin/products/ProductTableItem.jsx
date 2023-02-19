import Button from '../../../components/Button'

const ProductTableItem = ({ product, onUpdate, onDelete }) => {
    return (
        <tr className='border border-slate-200'>
            <td className='p-2'> {product.id} </td>
            <td className='p-2'> {product.name} </td>
            <td className='p-2'> {product.price} </td>
            <td className='p-2 flex gap-2'>
                <img className='h-6 w-6 object-cover' src={"http://localhost:8000/uploads/" + product.path} alt="" />
                <a className='text-blue-400' href={"http://localhost:8000/uploads/" + product.path}>
                    {product.path}
                </a>
            </td>
            <td >
                <div className='flex gap-2'>
                    <Button variant='small' onClick={() => onDelete(product.id)}> Delete </Button>
                    <Button variant='small' onClick={() => onUpdate(product)}> Update </Button>
                </div>
            </td>
        </tr>
    )
}

export default ProductTableItem