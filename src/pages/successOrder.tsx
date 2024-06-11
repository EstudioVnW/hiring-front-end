import { BadgeCheck } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from 'react-use-cart'

export default function SuccessOrder() {
  const { emptyCart } = useCart()

  useEffect(() => {
    emptyCart()
  }, [emptyCart])

  return (
    <div
      className="container min-h-[90vh] flex items-center justify-center gap-4
     flex-col"
    >
      <p className="flex flex-col text-5xl font-bold items-center text-lime-500">
        <span className="text-5xl">
          <BadgeCheck size={100} />
        </span>
        Compra concluída com sucesso!
      </p>
      <p className="leading-7 text-2xl">Obrigado</p>
      <p>Verifique o seu Email Para sua nota fiscal</p>
    </div>
  )
}
