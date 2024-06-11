import Loading from '@/components/loading'
import { Product } from '@/types'
import { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext<Product[] | []>([])

const url = 'https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos'

type ContextProviderProps = {
  children: React.ReactNode
}

export default function ContextProvider({ children }: ContextProviderProps) {
  const [data, setData] = useState<Product[] | []>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(async response => {
        if (!response.ok) {
          throw new Error('Error ao tenta fazer fetch')
        }
        setData(await response.json())
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading />
  if (error) return <div>Error ao tenta fazer fetch dos dados</div>

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)
