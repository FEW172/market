import productsFile from "../../data/products.json"

function getProducts() {
    const products = JSON.parse(localStorage.getItem("products"));
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(products ? products : []), 1000);
    });
}

function getProductsTop5Rating() {
    let products = JSON.parse(localStorage.getItem("products"));
    products = (products ? products : [])

    const filteredProducts = products
        .filter(productsItem => productsItem.availability)
        .filter(productsItem => productsItem.quantity > 0)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return filteredProducts;
}

function getProductsCount() {
    let products = JSON.parse(localStorage.getItem("products"));
    products = products ? products : [];
    return products.length;
}

function getProductsById(id) {
    let products = JSON.parse(localStorage.getItem("products"));

    return new Promise(function(resolve, reject) {
        if (products.length > 0) {
            setTimeout(() => resolve(products.filter(products => products.id == id)[0]), 1000);
        } else {
            setTimeout(() => reject(null), 1000);
        }
    });
}

function getProductsByCategory(category) {
    let products = JSON.parse(localStorage.getItem("products"));

    return new Promise(function(resolve, reject) {
        if (products.length > 0) {
            setTimeout(() => resolve(products.filter(products => products.category == category)), 1000);
        } else {
            setTimeout(() => reject(null), 1000);
        }
    });
}

function createProducts() {
    localStorage.clear("products");

    let products = JSON.parse(localStorage.getItem("products"));
    products = products ? products : [];

    productsFile.forEach(item => {
        products.push(item)
        localStorage.setItem("products", JSON.stringify(products));
    })

}

export { getProducts, getProductsCount, getProductsById, createProducts, getProductsTop5Rating, getProductsByCategory };