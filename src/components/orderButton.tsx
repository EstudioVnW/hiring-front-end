import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type orderButtonProps = {
  order: 'asc' | 'desc'
}

export default function OrderButton({ order }: orderButtonProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const [qs] = useSearchParams()
  const searchParamsOrder = qs.get('order')?.toLowerCase() ?? ''
  const isActive = searchParamsOrder === order
  const activeClass = isActive
    ? 'bg-gray-800 text-white border-transparent'
    : ''

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
      variant={'ghost'}
      className={cn(
        ` hover:bg-gray-800 bg-gray-200 hover:border-transparent hover:text-white transition-all border-2 border-slate-300 ease-in-out ${activeClass}`
      )}
    >
      {order === 'asc' ? 'Menor Preço' : 'Maior Preço'}
    </Button>
  )
}
