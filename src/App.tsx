import './App.css'
import { Footer } from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Shopping } from './screens/Shopping';
import { Cart } from './screens/Cart';


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
      <RouterProvider router={routers} />
      <Footer />
    </>
  )
}

export default App
