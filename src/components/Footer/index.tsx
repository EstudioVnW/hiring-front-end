import * as S from './styles'

export const Footer = () => {

  return (
    <S.FooterContainer>
      <S.Button>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className='back-to-init'>Voltar ao início</div>
      </S.Button>
    </S.FooterContainer>
  ) 
}