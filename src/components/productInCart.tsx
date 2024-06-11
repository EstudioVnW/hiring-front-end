import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Item } from 'react-use-cart'

type ProductInCartProps = {
  item: Item
}
import { useCart } from 'react-use-cart'
export default function ProductInCart({ item }: ProductInCartProps) {
  const { updateItemQuantity, removeItem } = useCart()

  const imageUrl = `${item.avatar}?${item.id} `

  const handleRemoveItem = () => {
    removeItem(item.id)
  }
  const handleUpdateQuantity = (number: number) => {
    updateItemQuantity(item.id, item.quantity! + number)
  }

  return (
    <div className="border border-slate-900 rounded-md flex items-center flex-col gap-4 sm:flex-row justify-between p-4">
      <Link to={`/product/${item.id}`}>
        <figure className="flex items-center gap-4 hover:text-blue-500">
          <img
            src={imageUrl}
            alt="imagem do produto"
            className="max-w-24 rounded-sm "
          />
          <figcaption className="text-xl font-bold">{item.name}</figcaption>
        </figure>
      </Link>
      <p className="font-bold ">R${item.itemTotal}</p>
      <div className="flex  justify-between w-full max-w-44 ">
        <div className="flex justify-between ">
          <button
            title="Aumenta quantidade"
            onClick={() => handleUpdateQuantity(1)}
            className="bg-red-500 text-white rounded-sm p-1 hover:bg-red-900"
          >
            <Plus />
          </button>
          <span className=" text-xl px-1  ">{item.quantity}</span>
          <button
            title="Diminuir quantidade"
            onClick={() => handleUpdateQuantity(-1)}
            className="bg-red-500 text-white rounded-sm p-1 hover:bg-red-900 "
          >
            <Minus />
          </button>
        </div>
        <button
          title="Remover item"
          onClick={handleRemoveItem}
          className="text-red-500 hover:text-red-900"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  )
}
