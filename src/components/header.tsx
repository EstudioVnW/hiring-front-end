import { Link } from 'react-router-dom'
import SearchBar from './searchBar'

import { useCart } from 'react-use-cart'
export default function Header() {
  const { totalItems } = useCart()

  return (
    <div className="bg-slate-900">
      <header className="p-2 container text-white flex items-center justify-between ">
        <h1 className="text-2xl font-bold">
          <Link to={'/'}>VNW</Link>
        </h1>
        <SearchBar />
        <div className="flex gap-7 items-center">
          <Link to={'/'} className="text-2xl hidden md:block ">
            Inicio
          </Link>
          <Link title="carrinho" to={'/cart'} className="text-3xl relative">
            🛒
            {totalItems >= 1 && (
              <span className="text-xs font-bold absolute right-1 text-white  bg-red-500 rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>
    </div>
  )
}
