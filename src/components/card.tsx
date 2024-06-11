import { Product } from '@/types'
import { Link } from 'react-router-dom'

export default function Card(product: Product) {
  const imageUrl = `${product.avatar}?${product.id} `
  return (
    <div className="w-48 rounded-md overflow-hidden shadow-md hover:shadow-xl hover:text-blue-700">
      <Link
        rel="stylesheet"
        className="flex flex-col"
        to={`/product/${product.id}`}
      >
        <figure>
          <img src={imageUrl} alt="imagem do produto" />
        </figure>
        <div className="p-1">
          <p className="text-xl">{product.name}</p>
          <p className="line-clamp-2">{product.desciption}</p>
          <p className="font-bold text-right">R$ {product.price}</p>
        </div>
      </Link>
    </div>
  )
}
