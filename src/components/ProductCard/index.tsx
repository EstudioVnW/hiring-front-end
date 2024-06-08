import { ProductDTO } from "../../@types/productDTO"
import { FunctionComponent } from "react"
import * as S from './styles'

type ProductCardProps = {
  product: ProductDTO
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product
}) => {
  const {name, avatar, desciption, price} = product
  
  return <S.ProductContainer>
    <img className="avatar" src={avatar} alt="" />
    <S.InfoContent>
      <h1 className="name">{name}</h1>
      <p className="description">{desciption}</p>
      <div className="price">
        <p>${price}</p>
      </div>
    </S.InfoContent>


  </S.ProductContainer>
}