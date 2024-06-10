import * as S from './styles'
import freeshipping from '../../assets/pngimg.com - free_shipping_PNG18.png'

export const Footer = () => {

  return (
    <S.FooterContainer>
      <S.Button>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className='back-to-init'>Scroll to top</div>
      </S.Button>

      <div className='content'>
        <div>
          <p>Tradly Store | CNPJ 74.634.591/0001-95</p>
          <p>Rua Batatinha 123, 18 - Lagos, Brasil</p>
          <p>Segunda a sexta: 9h às 20h</p>
        </div>
        <figure>
          <img className='free-shipping-img' src={freeshipping} alt={'freeshipping'}></img>
        </figure>

      </div>
    </S.FooterContainer>
  ) 
}