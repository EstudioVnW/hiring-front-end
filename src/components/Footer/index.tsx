import * as S from './styles'

export const Footer = () => {

  return (
    <S.FooterContainer>
      <S.Button>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className='back-to-init'>Scroll to top</div>
      </S.Button>
    </S.FooterContainer>
  ) 
}