import { FunctionComponent } from "react"
import { ProductDTO } from "../../@types/productDTO"
import { ProductCard } from "../ProductCard"
import { useCart } from "../../contexts/Cart/cart.context"


type ProductsListProps = {
  products: ProductDTO[]
}


export const ProductsList: FunctionComponent<ProductsListProps> = ({ products }) => {
  const { addItem, removeItem, items } = useCart()

  const onCart = (itemid: string) => {
    return !!items.find((item) => item.id === itemid)
  }

  return (
    products.map((product) => {
      return (
        <ProductCard
          key={product.id} product={product}
          onCart={onCart(product.id)}
          handleRemoveItem={(id: string) => removeItem(id)}
          handleAddItem={(item: ProductDTO) => addItem(item)}
        />
      )
    })
  )
}