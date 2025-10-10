import productsFile from "../../data/products.json"
import { useTransliteration } from "../../hooks/hooks";

function getProductsAll() {
    let products = productsFile;

    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(products ? products : []), 1000);
    });
}

function getProductsTop5Rating() {
    let products = productsFile;

    products = (products ? products : [])

    const filteredProducts = products
        .filter(productsItem => productsItem.availability)
        .filter(productsItem => productsItem.quantity > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return filteredProducts;
}

function getProductsCount() {
    let products = productsFile;
    products = products ? products : [];
    return products.length;
}

function getProductsById(id) {
    let products = productsFile;

    return new Promise(function(resolve, reject) {
        if (products.length > 0) {
            setTimeout(() => resolve(products.filter(products => products.id == id)[0]), 1000);
        } else {
            setTimeout(() => reject(null), 1000);
        }
    });
}

function getProductsByCategory(category) {

    let products = productsFile;

    products = products.filter(item => useTransliteration(item.category) === category);

    return new Promise(function(resolve, reject) {
        if (products.length > 0) {
            setTimeout(() => resolve(products.filter(products => useTransliteration(products.category) === category)), 1000);
        } else {
            setTimeout(() => reject(null), 1000);
        }
    });
}

export { getProductsAll, getProductsCount, getProductsById, getProductsTop5Rating, getProductsByCategory };