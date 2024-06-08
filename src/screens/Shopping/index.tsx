import { useEffect, useState } from "react"
import axios from "axios"
import { ProductDTO } from "../../@types/productDTO"
import { ProductCard } from "../../components/ProductCard"
import * as S from './styles'

export const Shopping = () => {
  const [products, setProducts] = useState<ProductDTO[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos')

      if(products?.data) {
        setProducts(products.data)
      }
      
    }

    fetchProducts()
  }, [])


  return (
    <S.ShoppingContainer>
      {
        products.map((product) => {
          return (
            <ProductCard key={product.id} product={product}/>
          )
        })
      }
    </S.ShoppingContainer>
  )
}