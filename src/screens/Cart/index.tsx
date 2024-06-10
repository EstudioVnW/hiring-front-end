import { Link } from 'react-router-dom'
import { ProductsList } from '../../components/ProductsList'
import { useCart } from '../../contexts/Cart/cart.context'
import { totalItemsValues } from '../../utils'
import * as S from './styles'

export const Cart = () => {
  const { items } = useCart()

  return (
    <S.CartContainer>
      <h1 className='cart-title'>{items.length} item(s) in your cart</h1>
      <p className='cart-sum'>Total: <strong>${totalItemsValues(items)}</strong></p>
      <div className='list-wrapper'>
        <ProductsList products={items}/>
      </div>
      <div className='buttons-row'>
        <Link to={"/"}>
          <button className='button-keep-buying'>keep buying</button>
        </Link>
        <button disabled={items.length === 0} className='button-finalize'>Finalize purchase</button>
      </div>

    </S.CartContainer>
  )
}