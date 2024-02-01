'use client'

import React, {useState} from "react";
import {Burger} from "@/types";
import {useOrderContext} from "@/context/OrderContext";
import {useRouter} from "next/navigation";

const AddToCart: React.FC<{ burger: Burger }> = ({burger}) => {
    const {addCartItem} = useOrderContext()
    const [count, setCount] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();


    const handleAddToCart = () => {
        addCartItem(burger, count)
        setShowModal(true);
    };

    const handleAddMoreItemsClick = () => {
        setShowModal(false);
        router.push('/');
    };

    const handleGoToCartClick = () => {
        setShowModal(false);
        router.push('/cart');
    };

    return (
        <div className="flex items-center space-x-2">
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

            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="text-black">Item Successfully Added.</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 mr-2 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={handleAddMoreItemsClick}
                        >
                            Add Other Items
                        </button>

                        <button
                            className="mt-4 px-4 py-2  ml-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={handleGoToCartClick}
                        >
                            Go To Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddToCart