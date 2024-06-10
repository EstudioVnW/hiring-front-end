import * as S from './styles'

type SearchInputProps = {
  handleSearch: (e: React.FormEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ handleSearch }: SearchInputProps) => {
  return (
    <S.Input onChange={handleSearch} placeholder='Search a product' />
  )
}