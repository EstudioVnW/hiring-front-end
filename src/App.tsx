import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/header'

import { Toaster } from './components/ui/toaster'
import Footer from './components/footer'

import AllRoutes from './AllRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
