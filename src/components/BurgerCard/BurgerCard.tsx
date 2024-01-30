import React from "react";
import {Burger} from "@/types";

const BurgerCard: React.FC<{ burger: Burger }> = ({burger}) => {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105">
            <img className="w-full h-64 object-cover" src={burger.image} alt={burger.name}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-slate-950">{burger.name}</div>
                <p className="text-gray-700 text-base">
                    {burger.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${burger.price}</span>
            </div>
        </div>
    );
};

export default BurgerCard