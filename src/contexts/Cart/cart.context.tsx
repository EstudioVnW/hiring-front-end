import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ProductDTO } from '../../@types/productDTO';


interface ICartContext {
  items: ProductDTO[];
  addItem: (product: ProductDTO) => void;
  removeItem: (productId: string) => void
}

const CartContext = createContext<ICartContext | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState<ProductDTO[]>([]);

  useEffect(() => {
    console.log('cart', value)
  }, [value])

  const addItem = (product: ProductDTO) => {
    const alreadyAdd = value.find(i => i.id === product.id)
    if(alreadyAdd) return
    setValue(prev => [...prev, product])
  }

  const removeItem = (id: string) => {
    const newItems = value.filter((item) => item.id !== id)
    setValue(newItems)
  }

  const items = value

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};


const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { CartProvider, useCart };
