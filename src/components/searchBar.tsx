import { Search } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'

function SearchBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchParams = new URLSearchParams(location.search)
    searchParams.set('search', searchTerm)
    navigate(`?${searchParams.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex">
      <Input
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <Search />
      </button>
    </form>
  )
}

export default SearchBar
