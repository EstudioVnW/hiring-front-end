import * as S from './styles'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/logo-xhdpi.png'
import { Link } from 'react-router-dom';
import { ReactNode, FunctionComponent } from 'react';
import { useCart } from '../../contexts/Cart/cart.context';

export const Header: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const {items} = useCart()
  const cartlength = items.length

  return (
    <S.HeaderContainer>
      <div className='input-container'>
        <img src={logo}></img>
        {children}
      </div>
      <Link to="cart">
        <button className='cart-button'>
          <FaShoppingCart size={'32px'}/>
          {cartlength}
        </button>
      </Link>
    </S.HeaderContainer>
  )
}