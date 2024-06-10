export interface CartItem {
    id: number;
    price: number;
    quantity: number;
    avatar: string;
    name: string;
}

export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
    clearCart: () => void;
    getCartTotal: () => number;
}
