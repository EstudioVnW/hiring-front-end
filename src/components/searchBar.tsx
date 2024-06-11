import { Search } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'

function SearchBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const [searchTerm, setSearchTerm] = useState('')
  const [qs] = useSearchParams()
  const searchParamsOrder = qs.get('search')?.toLowerCase() ?? ''

  useEffect(() => {
    setSearchTerm(searchParamsOrder)
  }, [searchParamsOrder])

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('search', searchTerm)
    const isHomePage = location.pathname === '/'
    const navigateToUrl = isHomePage
      ? `?${searchParams.toString()}`
      : `/?${searchParams.toString()}`

    navigate(navigateToUrl)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full md:max-w-[350px] max-w-[150px]  "
    >
      <Input
        className="text-black w-full rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none focus-visible:ring-0  focus-visible:ring-offset-0 "
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button
        title="botão de pesquisa"
        type="submit"
        className="text-black bg-[#febd69] hover:bg-[#c49251]  transition-all ease-in-out p-1 rounded-br-md rounded-tr-md "
      >
        <Search />
      </button>
    </form>
  )
}

export default SearchBar
