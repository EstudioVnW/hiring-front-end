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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(API);
      const data = await response.json();

      const updatedProducts = data.map((product) => ({
        ...product,
        avatar: `${product.avatar}?${new Date().getTime()}`,
      }));

      for (let i = 0; i < updatedProducts.length; i++) {
        setTimeout(() => {
          setProducts((prevProducts) => [...prevProducts, updatedProducts[i]]);
          setFilteredProducts((prevProducts) => [...prevProducts, updatedProducts[i]]);
        }, i * 1000);
      }
    };

    fetchProducts();

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
