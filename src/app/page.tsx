import React from "react";
import BurgerCard from "@/components/BurgerCard/BurgerCard";
import Link from "next/link";
import {getBurgers} from "@/services/burgerService";

const Home: React.FC = async () => {
    const {burgers} = await getBurgers()
    return (
        <main className="flex flex-col items-center justify-center p-24">
            <div className="grid grid-cols-4 gap-4">
                {burgers.map(burger => (
                    <Link key={burger.id} href={`/${burger.id}`}>
                        <BurgerCard burger={burger}/>
                    </Link>
                ))}
            </div>
        </main>
    );
}
export default Home
