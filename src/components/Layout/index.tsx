import { Footer } from '../Footer'
import * as S from './styles'

export const Layout = ({ children }) => {
  return (
    <S.Container>
      {children}
      <Footer></Footer>
    </S.Container>
  )
}