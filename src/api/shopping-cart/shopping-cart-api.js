function getShoppingCartCount() {
    let shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    shoppingCart = shoppingCart ? shoppingCart : [];

    return shoppingCart.length;
}

function getShoppingCart() {
    const shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(shoppingCart ? shoppingCart : []), 1000);
    });
}

function addShoppingCart(item) {
    console.log(item);
}

export { getShoppingCartCount, getShoppingCart, addShoppingCart };