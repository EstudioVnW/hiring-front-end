import CardsContainer from '../cardsContainer'
import OrderButton from '../orderButton'

export default function HomePage() {
  CardsContainer
  return (
    <main className="container">
      <p className="flex items-center gap-2 font-bold mb-3">
        Ordenar por :
        <span className="flex gap-4">
          <OrderButton order={'asc'} />
          <OrderButton order={'desc'} />
        </span>
      </p>
      <CardsContainer />
    </main>
  )
}
