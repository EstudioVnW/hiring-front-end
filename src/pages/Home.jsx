import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { API } from '../constants/api.jsx';
import Cart from '../components/Cart.jsx';
import { AiOutlineClear } from "react-icons/ai";
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
    setFilteredProducts(
      products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredProducts(products);
  };

  const handleAddToCart = product => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="home">

     <Header />

      <h1>Escolha seus produtos</h1>
      
      <div className='search-bar-content'>
        <SearchBar className onSearch={handleSearch} />
        <button onClick={handleClearSearch}>
          <AiOutlineClear/>
          Limpar
        </button>
      </div>
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
      
      <Cart cartItems={cartItems} />

      <Footer />
    </div>
  );
};

export default Home;
