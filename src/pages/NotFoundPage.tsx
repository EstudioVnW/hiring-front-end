import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const [count, setCount] = useState(10)
  const timeout = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    if (count <= 0) {
      navigate('/')
      return
    }

    timeout.current = setTimeout(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)

    return () => {
      clearTimeout(timeout.current)
    }
  }, [count, navigate])
  return (
    <div className="flex min-h-[90vh] items-center flex-col justify-center">
      <p className="md:text-2xl font-bold">Pagina não encontrada</p>
      <p className="md:text-2xl font-bold">
        Retornando para Pagina inicial em: {count}
      </p>
    </div>
  )
}
