import { ReactNode } from 'react'
import { Footer } from '../Footer'
import * as S from './styles'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      {children}
      <Footer></Footer>
    </S.Container>
  )
}