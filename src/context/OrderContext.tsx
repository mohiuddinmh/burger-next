'use client'

import React, {createContext, useContext, useState} from 'react'
import {Burger} from '@/types' // Assuming this is the shape of your Burger type

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

const OrderContext = createContext<OrderContextType>({
    cartItems: [],
    addCartItem: () => {
        console.warn('addCartItem function not implemented')
    },
    removeCartItem: () => {
        console.warn('removeCartItem function not implemented')
    }
})

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    // Function to add a burger to the order
    const addCartItem = (burger: Burger, quantity: number) => {
        setCartItems((prevCartItems) => {
            const existingCartItem = prevCartItems.find(item => item.burger.id === burger.id)

            if (existingCartItem) {
                return prevCartItems.map(item =>
                    item.burger.id === burger.id ? {...item, quantity: item.quantity + quantity} : item
                )
            } else {
                return [...prevCartItems, {burger, quantity}]
            }
        })
    }


    const removeCartItem = (burgerId: string) => {
        setCartItems((prevBurgers) => prevBurgers.filter(item => item.burger.id !== burgerId))
    }

    return (
        <OrderContext.Provider value={{cartItems, addCartItem, removeCartItem}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrderContext = () => useContext(OrderContext)
