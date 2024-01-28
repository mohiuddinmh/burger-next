import React from "react";

type Burger = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    calorie: number;
};
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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            {burgers.map(burger => (
                <div key={burger.id}>{burger.name}</div>
            ))}
        </main>
    );
}
export default Home
