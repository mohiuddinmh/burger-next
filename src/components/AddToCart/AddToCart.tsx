'use client'

import React, {useState} from "react";
import {Burger} from "@/types";
import {useOrderContext} from "@/context/OrderContext";

const AddToCart: React.FC<{ burger: Burger }> = ({burger}) => {
    const {addCartItem} = useOrderContext()
    const [count, setCount] = useState(1);


    const handleAddToCart = () => {
        // Ideally, you would also update the cart state or make an API call to add the burger to the cart
        console.log(`Adding ${burger.name} to cart`);
        addCartItem(burger, count)
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Decrease and Increase buttons with minimalistic design */}
            <button
                aria-label="Decrease quantity"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"/>
                </svg>
            </button>

            {/* Display the count */}
            <span className="text-sm font-medium">{count}</span>

            <button
                aria-label="Increase quantity"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setCount(count + 1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6"/>
                </svg>
            </button>

            {/* Add to Cart Button with a minimalistic design */}
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default AddToCart