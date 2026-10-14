
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from 'axios'

function ProductDetails() {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(()=>{
        getProduct()
    },[])

    return (
        <div>
            <h1>Product Details</h1>

            {product ? (<>
                <h2>Name: {product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <p>Quntity:{product.quantity}</p>

                
            </>) : <h2>Loading...</h2>}

        </div>
    )
}

export default ProductDetails
