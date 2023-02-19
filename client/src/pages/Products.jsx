import { useEffect } from "react"
import ProductItem from "./ProductItem";
import { useProductContext } from "../contexts/ProductContext"

const Products = () => {

    const { state, fetch } = useProductContext()

    console.log(state);

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="w-[70%] mx-auto p-5">
            <h1 className="text-2xl font-bold">Products</h1>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    state.products.map(product => <ProductItem product={product}/>)
                }
            </div>
        </div>
    )
}

export default Products