'use client'

import React, {createContext, useContext, useState} from 'react';
import {Burger} from '@/types'; // Assuming this is the shape of your Burger type

type CartItem = {
    burger: Burger,
    quantity: number
}
// Define the context shape
type OrderContextType = {
    cartItems: CartItem[]
    addCartItem: (burger: Burger, quantity: number) => void;
    removeCartItem: (burgerId: string) => void;
}

const OrderContext = createContext<OrderContextType>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Function to add a burger to the order
    const addCartItem = (burger: Burger, quantity: number) => {
        setCartItems((prevCartItems) => [...prevCartItems, {burger, quantity}]);
    };

    // Function to remove a burger from the order by its id
    const removeCartItem = (burgerId: string) => {
        setCartItems((prevBurgers) => prevBurgers.filter(item => item.burger.id !== burgerId));
    };

    return (
        <OrderContext.Provider value={{cartItems, addCartItem, removeCartItem}}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => useContext(OrderContext);
