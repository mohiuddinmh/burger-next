'use client'

import React from "react"
import {useOrderContext} from "@/context/OrderContext"
import {useRouter} from "next/navigation"

const Cart: React.FC = () => {
    const {cartItems, removeCartItem} = useOrderContext()
    const router = useRouter()

    const handlePlaceOrder = () => {
        alert("Thank you!!")
    }

    const handleAddMoreItems = () => {
        router.push("/")
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index}
                                 className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b-2 py-4">
                                <img src={item.burger.image} alt={item.burger.name}
                                     className="h-16 w-16 object-cover rounded md:col-span-1"/>
                                <div className="md:col-span-5">
                                    <h3 className="text-lg font-semibold">{item.burger.name}</h3>
                                    <p className="text-gray-600">${item.burger.price} each</p>
                                </div>
                                <span className="text-sm font-medium md:col-span-2">Qty: {item.quantity}</span>
                                <span className="font-bold md:col-span-2">${(item.burger.price) * item.quantity}</span>
                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 md:col-span-2"
                                    onClick={() => removeCartItem(item.burger.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            onClick={handleAddMoreItems}
                            className="px-6 py-2 bg-blue-300 text-white font-bold rounded hover:bg-blue-400 transition duration-300"
                        >
                            Add More Items
                        </button>

                        <button
                            onClick={handlePlaceOrder}
                            className="px-6 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-300"
                        >
                            Place Order
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center py-6">Your cart is empty.</div>
            )}
        </div>
    )
}

export default Cart
