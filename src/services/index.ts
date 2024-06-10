import axios from "axios"
import { ProductDTO } from "../@types/productDTO"

export async function fetchProducts() {
  const products = await axios.get('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos')

  if(products?.data) {
    products.data = products.data.map((product: ProductDTO, i: number) => {
      return {
        ...product,
        avatar: product.avatar + `?random=${i}`,
      }
    })
  
    return products
  }
}