import { getProducts, getProductsById, getProductsTop5Rating, getProductsByCategory } from "./products/productsapi";
import { getShoppingCartCount } from "./shopping-cart/shopping-cart-api";

export async function loadProducts() {
    const products = await getProducts();
    return { products };
}

export async function loadProductById({ params }) {
    const products = await getProductsById(params.id);

    return { products };
}

export async function loadProductsTop5Rating() {
    const products = await getProductsTop5Rating();
    return { products };
}

export async function loadProductsByCategory ({ params }) {
    const products = await getProductsByCategory(params.category);
    return { products };
}

export async function loadShoppingCart() {

}