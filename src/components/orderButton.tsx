import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

type orderButtonProps = {
  order: 'asc' | 'desc'
}

export default function OrderButton({ order }: orderButtonProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleButton = () => {
    const searchParams = new URLSearchParams(location.search)

    searchParams.set('order', order)
    const isHomePage = location.pathname === '/'
    const navigateToUrl = isHomePage
      ? `?${searchParams.toString()}`
      : `/?${searchParams.toString()}`

    navigate(navigateToUrl)
  }

  return (
    <Button
      onClick={handleButton}
      variant={'outline'}
      className="bg-gray-400 hover:bg-gray-800 hover:text-white transition-all ease-in-out "
    >
      {' '}
      {order === 'asc' ? 'Menor Preço' : 'Maior Preço'}
    </Button>
  )
}
