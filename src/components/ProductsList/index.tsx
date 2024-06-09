import { FunctionComponent } from "react"
import { ProductDTO } from "../../@types/productDTO"
import { ProductCard } from "../ProductCard"


type ProductsListProps = {
  products: ProductDTO[]
}


export const ProductsList: FunctionComponent<ProductsListProps> = ({ products }) => {
  return (
    products.map((product) => {
      return (
        <ProductCard key={product.id} product={product}/>
      )
    })
  )
}