import CardsContainer from '../components/cardsContainer'
import OrderButton from '../components/orderButton'

export default function HomePage() {
  CardsContainer
  return (
    <main>
      <div className="mx-auto bg-custom bg-center md:-mb-28 sm:-mb-20" />
      <div className="container">
        <p className="flex items-center gap-2 font-bold my-4 flex-wrap">
          <span className="flex gap-4 ">
            <OrderButton order={'asc'} />
            <OrderButton order={'desc'} />
          </span>
        </p>
        <CardsContainer />
      </div>
    </main>
  )
}
