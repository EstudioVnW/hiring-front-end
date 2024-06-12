import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { API } from '../constants/api.jsx';
import Cart from '../components/Cart.jsx';
import { AiOutlineClear } from "react-icons/ai";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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

  const handleRemoveFromCart = productId => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleViewCart = () => {
    navigate('/cart', { state: { handleRemoveFromCart } });
  };

  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
