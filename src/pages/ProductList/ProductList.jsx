
import { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios"

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  async function getAllProducts() {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    setProducts(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  async function deleteProduct(productId) {
    await axios.delete(`${import.meta.env.VITE_API_URL}/products/${productId}`)
    getAllProducts()
  }

  return (
    <div>
      <h1>Products List</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {products.map((product) => (
            <div key={product._id}>
              <h3>{product.title}</h3>

              <Link to={`/products/${product._id}`}>
                View Details
              </Link>

              <button onClick={() => deleteProduct(product._id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ProductsList;
