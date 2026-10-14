
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function CreateProduct() {

  const navigate = useNavigate()

  const [formData, setFromData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    quantity: "",
  })

  function handleChange(event) {
    setFromData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/products`,
      {
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity)
      }
    )

  navigate(`/products/${response.data._id}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.title}
          name="title"
          id="title"
        />

        <label htmlFor="description">description:</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.description}
          name="description"
          id="description"
        />

        <label htmlFor="category">category:</label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.category}
          name="category"
          id="category"
        />

        <label htmlFor="quantity">quantity:</label>
        <input
          type="number"
          onChange={handleChange}
          value={formData.quantity}
          name="quantity"
          id="quantity"
        />

        <label htmlFor="price">price:</label>
        <input
          type="number"
          onChange={handleChange}
          value={formData.price}
          name="price"
          id="price"
        />

        <button>Create Products</button>
      </form>
    </div>
  )
}

export default CreateProduct
