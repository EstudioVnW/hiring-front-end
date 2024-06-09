import { useEffect, useState } from "react"
import axios from "axios"
import { ProductDTO } from "../../@types/productDTO"
import * as S from './styles'
import { ProductsList } from "../../components/ProductsList"
import { Header } from "../../components/Header"
import { SearchInput } from "../../components/SearchInput/indext"
import banner1 from '../../assets/banner1.jpg'

export const Shopping = () => {
  const [products, setProducts] = useState<ProductDTO[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const products = await axios.get('https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos')

      if(products?.data) {
        products.data = products.data.map((product: ProductDTO, i: number) => {
          return {
            ...product,
            avatar: product.avatar + `?random=${i}`,
          }
        })
        console.log(products)
        setProducts(products.data)
      }
      
    }

    fetchProducts()
  }, [])


  return (
    <>
      <Header>
        <SearchInput />
      </Header>
      <img className='banner' style={{width: '100%'}} src={banner1}/>
      <S.ShoppingContainer>
        <ProductsList products={products} />
      </S.ShoppingContainer>
    </>
  )
}