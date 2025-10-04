import productsData from "../../src/data/products.json"

export function useGetProducts() {

    return {
        products: productsData
    }
}

