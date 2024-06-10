import { ProductDTO } from "../../@types/productDTO"
import { FunctionComponent } from "react"
import * as S from './styles'

type ProductCardProps = {
  product: ProductDTO,
  handleAddItem: (item: ProductDTO) => void
  handleRemoveItem: (id: string) => void
  onCart?: boolean
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
  handleAddItem,
  handleRemoveItem,
  onCart
}) => {
  const {name, avatar, desciption, price} = product
  
  return <S.ProductContainer>
    <figure className="avatar">
      <img className="avatar" src={avatar} alt="product image" />
    </figure>
    <S.InfoContent>
      <h1 className="name">{name}</h1>
      <p className="description">{desciption}</p>
      <div className="price">
        <p>${price}</p>
      </div>

      {
        onCart ? 
          <button onClick={() => handleRemoveItem(product.id)} className="add-to-cart-button">Remove item</button> 
          : <button onClick={() => handleAddItem(product)} className="add-to-cart-button">Add to Cart</button>
      }
      
    </S.InfoContent>


  </S.ProductContainer>
}