import Card from "../components/Card"

const ProductItem = ({ product }) => {
    return (
        <Card className="hover:-translate-y-2 transition-all duration-150 ">
            <div className="flex flex-col gap-1">
                <img className="h-60 object-cover rounded-sm" src={`http://localhost:8000/uploads/${product.path}`} alt="" />
                <h3 className="font-bold text-xl"> {product.name} </h3>
                <span className="text-slate-400"> {product.price} </span>
            </div>
        </Card>
    )
}

export default ProductItem