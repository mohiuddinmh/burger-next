import {Burger} from "@/types"


export const getBurgers = async (): Promise<{ burgers: Burger[] }> => {
    const response = await fetch("https://burgerhub00.github.io/data/products.json")
    if (!response.ok) {
        throw new Error("failed to fetch users")
    }

    const data = await response.json()

    return {
        burgers: data.products.map((product: Burger) => ({
            ...product,
            price: product.price / 100
        }))
    }
}