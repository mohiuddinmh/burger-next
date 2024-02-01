'use client'

import React from "react";
import {useOrderContext} from "@/context/OrderContext";
import {useRouter} from "next/navigation";

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
                            <div key={index} className="flex items-center justify-between border-b-2 py-4">
                                <div className="flex items-center">
                                    <img src={item.burger.image} alt={item.burger.name}
                                         className="h-16 w-16 object-cover rounded mr-4"/>
                                    <div>
                                        <h3 className="text-lg font-semibold">{item.burger.name}</h3>
                                        <p className="text-gray-600">${item.burger.price} each</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-sm font-medium mr-4">Qty: {item.quantity}</span>
                                    <span className="font-bold">${(item.burger.price) * item.quantity}</span>
                                </div>
                                <button
                                    className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                                    onClick={() => removeCartItem(item.burger.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center space-x-4"> {/* Adjusted for spacing between buttons */}
                        <button
                            onClick={handleAddMoreItems} // Assuming this is the correct handler
                            className="px-6 py-2 bg-blue-300 text-white font-bold rounded hover:bg-blue-400 transition duration-300"
                        >
                            Add More Items
                        </button>

                        <button
                            onClick={handlePlaceOrder} // Assuming this is the correct handler
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