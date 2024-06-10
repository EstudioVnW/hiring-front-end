import { useStateContext } from '@/context/ContextProvider'
import Card from './card'
import { useSearchParams } from 'react-router-dom'

export default function CardsContainer() {
  const data = useStateContext()
  const [qs] = useSearchParams()
  const searchParams = qs.get('search')?.toLowerCase() ?? ''
  const searchParamsOrder = qs.get('order')?.toLowerCase() ?? 'asc'

  const filterData =
    data.filter(r => r.name.toLowerCase()?.includes(searchParams)) ?? data

  const sortedData = filterData.sort((a, b) => {
    if (searchParamsOrder === 'asc') {
      return a.price - b.price
    } else {
      return b.price - a.price
    }
  })

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {sortedData && sortedData.map(item => <Card key={item.id} {...item} />)}
      {searchParams && sortedData.length === 0 && <p>Produto Não encontrado</p>}
    </div>
  )
}
