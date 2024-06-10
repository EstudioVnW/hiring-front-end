import { useEffect, useState } from "react"
import { ProductDTO } from "../../@types/productDTO"
import * as S from './styles'
import { ProductsList } from "../../components/ProductsList"
import { Header } from "../../components/Header"
import { SearchInput } from "../../components/SearchInput/indext"
import banner1 from '../../assets/banner1.jpg'
import { fetchProducts } from "../../services"
import { searchProducts } from "../../utils"

export const Shopping = () => {
  const [products, setProducts] = useState<ProductDTO[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [requestError, setRequestError] = useState(false)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleFetchProducts()
  }, [])

  const handleFetchProducts = () => {
    setFetching(true)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fetchProducts().then((res: any) => {
      if(res.status !== 200) {
        setRequestError(true)
        return 
      }
      setRequestError(false)
      setProducts(res.data)
    }).catch(() => {
      setRequestError(true)
    }).finally(() => {
      setFetching(false)
    })
  }

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    setSearchTerm(e.currentTarget.value)
  }

  const returnSearchedProducts = () => {
    if(searchTerm !== '') {
      return searchProducts(products, searchTerm)
    }

    return products
  }

  return (
    <>
      <Header>
        <SearchInput handleSearch={handleChangeInput}/>
      </Header>
      <S.ShoppingContainer>
        {returnSearchedProducts().length !== 0 ? <img className='banner' style={{width: '100%'}} src={banner1}/> : null}
        <div className="limit-container">
        {requestError ? 
          <div>
            <p style={{ marginTop: '400px', color: "#4A4A4A", fontSize: '2rem'}}>Something went wrong!</p>
            <button onClick={handleFetchProducts}>Try again</button>
          </div>
          : null
        }

          {!requestError && !fetching && returnSearchedProducts().length === 0 ? 
            <p style={{ marginTop: '400px', color: "#4A4A4A", fontSize: '2rem'}}>No products found <br/>for this search!</p>
            : null}
          <ProductsList products={returnSearchedProducts()} />
        </div>
      </S.ShoppingContainer>
    </>
  )
}