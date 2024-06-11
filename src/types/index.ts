export type Product = {
  createdAt: string
  name: string
  avatar: string
  desciption: string
  price: number
  id: string
}

declare module 'react-use-cart' {
  interface Item {
    createdAt: string
    name: string
    avatar: string
    desciption: string
    price: number
    id: string
  }
}
