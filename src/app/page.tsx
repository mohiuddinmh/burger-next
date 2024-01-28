import React from "react";
import {Burger} from "@/types";
import BurgerCard from "@/components/BurgerCard/BurgerCard";

const getBurgers = async (): Promise<{burgers: Burger[]}> => {
    const response = await fetch("https://burgerhub00.github.io/data/products.json");
    if(!response.ok){
        throw new Error("failed to fetch users")
    }

  const data =  await response.json()

    return { burgers: data.products };
}

const Home: React.FC = async () => {
    const {burgers} = await getBurgers()
    return (
        <main className="flex flex-col items-center justify-center p-24">
            <div className="grid grid-cols-4 gap-4">
                {burgers.map(burger => (
                    <BurgerCard key={burger.id} burger={burger} />
                ))}
            </div>
        </main>
    );
}
export default Home
