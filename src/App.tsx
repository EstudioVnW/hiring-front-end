
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/Home'
import Header from './components/header'
import ProductPage from './Product'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
