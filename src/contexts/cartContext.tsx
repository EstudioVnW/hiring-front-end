import {
    ReactNode,
    createContext,
    useCallback,
    useEffect,
    useState,
} from 'react';

import { CartContextType, CartItem } from '../interfaces/cart';

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    getCartTotal: () => 0,
    quantityProductInCart: 0,
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(
        localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems')!)
            : [],
    );
    const [quantityProductInCart, setQuantityProductInCart] = useState(0);

    const addToCart = (item: CartItem) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id,
        );

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem,
                ),
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleQuantityProducts = useCallback(() => {
        const totalQuantity = cartItems.reduce(
            (total, item) => total + item.quantity,
            0,
        );
        setQuantityProductInCart(totalQuantity);
    }, [cartItems]);

    const removeFromCart = (item: CartItem) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem.id === item.id,
        );

        if (isItemInCart && isItemInCart.quantity === 1) {
            setCartItems(
                cartItems.filter((cartItem) => cartItem.id !== item.id),
            );
        } else if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem,
                ),
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
        );
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        handleQuantityProducts();
    }, [cartItems, handleQuantityProducts]);

    useEffect(() => {
        const cartItems = localStorage.getItem('cartItems');
        if (cartItems) {
            setCartItems(JSON.parse(cartItems)!);
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                quantityProductInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
