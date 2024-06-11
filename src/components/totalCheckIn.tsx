import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { useCart } from 'react-use-cart'

export default function TotalCheckIn() {
  const navigate = useNavigate()
  const { cartTotal, totalItems } = useCart()
  const frete = 4.99
  return (
    <div className=" flex lg:justify-end ">
      <div className=" border-slate-900 rounded-md border-2 lg:fixed w-full max-w-[500px] flex flex-col p-4 gap-5">
        <p className="font-bold text text-xl sm:text-5xl flex justify-between items-baseline">
          Total <span className="text-xl ">({totalItems}) Produtos</span>
        </p>
        <p className="flex justify-between sm:text-xl">
          Subtotal <span>R${cartTotal}</span>
        </p>
        <p className="flex justify-between text-lg sm:text-xl">
          Frete <span>R${frete}</span>
        </p>
        <p className="font-bold flex justify-between  sm:text-2xl">
          Total estimado {cartTotal && <span>R${cartTotal + frete}</span>}
        </p>
        <Button
          onClick={() => navigate('/success')}
          className="bg-[#ffd814] hover:bg-[#cdae12]  rounded-full text-xl px-5 shadow-sm text-black "
        >
          Continuar
        </Button>
      </div>
    </div>
  )
}
