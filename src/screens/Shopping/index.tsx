import { useEffect, useState } from "react"
import { ProductDTO } from "../../@types/productDTO"
import * as S from './styles'
import { ProductsList } from "../../components/ProductsList"
import { Header } from "../../components/Header"
import { SearchInput } from "../../components/SearchInput/indext"
import banner1 from '../../assets/banner1.jpg'
import { fetchProducts } from "../../services"

export const Shopping = () => {
  const [products, setProducts] = useState<ProductDTO[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchProducts().then((res: any) => {
      setProducts(res.data)
    })  
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