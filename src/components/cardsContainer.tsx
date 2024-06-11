import { useStateContext } from '@/context/contextProvider'
import Card from './card'
import { useSearchParams } from 'react-router-dom'

export default function CardsContainer() {
  const data = useStateContext()
  const [qs] = useSearchParams()
  const searchParams = qs.get('search')?.toLowerCase() ?? ''
  const searchParamsOrder = qs.get('order')?.toLowerCase() ?? ''

  const filterData =
    data.filter(r => r.name.toLowerCase()?.includes(searchParams)) ?? data

  let sortedData = filterData

  if (searchParamsOrder) {
    sortedData = filterData.sort((a, b) => {
      if (searchParamsOrder === 'asc') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
  }

  return (
    <div className="grid lg:grid-cols-5 gap-5 flex-wrap justify-center md:grid-cols-3 grid-cols-1 justify-items-center min-h-[80vh]">
      {sortedData && sortedData.map(item => <Card key={item.id} {...item} />)}
      {searchParams && sortedData.length === 0 && (
        <p className="text-xl ">Produto não encontrado</p>
      )}
    </div>
  )
}
