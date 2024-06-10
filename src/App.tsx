import './App.css'
import { Footer } from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Shopping } from './screens/Shopping';
import { Cart } from './screens/Cart';
import { CartProvider } from './contexts/Cart/cart.context';


function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Shopping />,
    },
    {
      path: 'cart',
      element: <Cart />
    }
  ])
  
  return (
    <>
      <CartProvider>
        <RouterProvider router={routers} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
