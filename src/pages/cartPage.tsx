import ProductInCart from '@/components/productInCart'
import { useCart } from 'react-use-cart'
import { MagicMotion } from 'react-magic-motion'

import { Link } from 'react-router-dom'
import { CircleX, Plus } from 'lucide-react'
import TotalCheckIn from '@/components/totalCheckIn'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  const { items } = useCart()

  return (
    <div className="py-10 grid lg:grid-cols-2 gap-10 min-h-[90vh] container grid-cols-1 ">
      {items.length > 0 && (
        <>
          <MagicMotion>
            <div className="flex flex-col gap-1">
              {items.length > 0 &&
                items.map(item => <ProductInCart key={item.id} item={item} />)}
            </div>
          </MagicMotion>

          <TotalCheckIn />
        </>
      )}
      {items.length == 0 && (
        <section className=" col-span-2 self-center  flex justify-center ">
          <div className="flex h-[450px] w-full max-w-[500px]  rounded-md border-2 border-dashed border-gray-500">
            <div className="mx-auto flex  flex-col items-center justify-center text-center">
              <CircleX size={50} />
              <h3 className="mt-4 text-lg font-semibold">Carrinho Vazio</h3>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                Ir as Compras
              </p>
              <Link to="/">
                <Button className="inline-flex items-center justify-center text-sm font-medium   bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 rounded-md ">
                  <Plus />
                  Adicionar Produtos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
