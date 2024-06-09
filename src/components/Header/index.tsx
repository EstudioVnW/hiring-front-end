import * as S from './styles'
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/logo-xhdpi.png'
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const cartlength = 0

  return (
    <S.HeaderContainer>
      <div className='input-container'>
        <img src={logo}></img>
        {props.children}
      </div>
      <button onClick={() =><Link to={'cart'}/>} className='cart-button'>
        <FaShoppingCart size={'32px'}/>
        {cartlength}
      </button>
    </S.HeaderContainer>
  )
}