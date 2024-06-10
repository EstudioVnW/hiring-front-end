import { useParams } from 'react-router-dom'

export default function ProductPage() {
  const params = useParams()
  return <div>ProductPage id : {params.id}</div>
}
