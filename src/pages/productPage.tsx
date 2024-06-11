import { Button } from '@/components/ui/button'
import { useStateContext } from '@/context/contextProvider'
import { Link, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'
import NotFoundPage from './NotFoundPage'

export default function ProductPage() {
  const { toast } = useToast()
  const { addItem } = useCart()
  const data = useStateContext()
  const params = useParams()
  const productInfo = data.find(p => p.id === params.id)
  if (!productInfo) {
    return <NotFoundPage />
  }
  const imageUrl = `${productInfo.avatar}?${productInfo.id} `
  const handleAddToCart = () => {
    addItem(productInfo)
    toast({
      duration: 2000,
      title: '🛒 Pedido adicionado ao carrinho.',
      className: 'bg-slate-900 text-white',
      action: (
        <ToastAction className="hover:bg-black" altText="Ver Carrinho">
          <Link to="/cart">Ver carrinho</Link>
        </ToastAction>
      )
    })
  }

  return (
    <main className="py-10 container min-h-[90vh]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <figure>
          <img src={imageUrl} alt="imagem do produto" />
        </figure>
        <div className="flex flex-col gap-4 ">
          <p className="font-bold text-5xl">{productInfo.name}</p>
          <p className="text-3xl">{productInfo.desciption}</p>
          <p className="text-3xl font-bold ">R$ {productInfo.price}</p>
          <Button
            onClick={handleAddToCart}
            className="bg-[#ffd814] hover:bg-[#cdae12]  text-xl px-5 shadow-sm text-black max-w-96"
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </main>
  )
}
