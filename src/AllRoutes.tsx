import { Routes, Route } from 'react-router-dom'
import CartPage from './pages/cartPage'
import HomePage from './pages/homePage'
import ProductPage from './pages/productPage'
import SuccessOrder from './pages/successOrder'
import NotFoundPage from './pages/NotFoundPage'

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/success" element={<SuccessOrder />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
