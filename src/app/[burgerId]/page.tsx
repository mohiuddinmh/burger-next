import React from "react";
import {getBurgers} from "@/services/burgerService";
import AddToCart from "@/components/AddToCart/AddToCart";
import Link from "next/link";

const BurgerDetail: React.FC<{ params: { burgerId: string } }> = async ({params: {burgerId}}) => {
    const {burgers} = await getBurgers()

    const burger = burgers.find(b => b.id === burgerId)
    return <div className="flex justify-center items-center">
        {burger && (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="p-4">
                    <Link href="/"
                          passHref
                          className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out font-semibold">
                        &#8592; Go Back
                    </Link>
                </div>
                <div>
                    <img src={burger.image} alt={burger.name} className="w-full h-64 object-cover"/>
                </div>

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{burger.name}</div>
                    <p className="text-gray-700 text-base">
                        {burger.description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {burger.price}</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Calories: {burger.calorie}</span>
                </div>

                <AddToCart burger={burger}/>
            </div>
        )}
    </div>
}

export default BurgerDetail