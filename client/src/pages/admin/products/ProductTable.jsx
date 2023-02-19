import ProductTableItem from './ProductTableItem'

const ProductTable = ({ products }) => {
    console.log(products);
    return (
        <table className='border border-slate-200 w-full'>
            <thead className='bg-slate-100'>
                <tr>
                    <th className='p-2 text-start'> Id </th>
                    <th className='p-2 text-start'> Name </th>
                    <th className='p-2 text-start'> Price </th>
                    <th className='p-2 text-start'> Path </th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <ProductTableItem key={product.id} product={product}/>) 
                }
            </tbody>
        </table>
    )
}

export default ProductTable