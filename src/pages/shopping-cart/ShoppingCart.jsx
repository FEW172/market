import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function ShoppingCart() {
    const shoppingCart = useLoaderData();

    const [cart, setCart] = useState(shoppingCart ? shoppingCart : []);
    const [total, setTotal] = useState(0);

    return (

        <>
            <h1>Корзина</h1>

            {cart.length === 0 ? (
                <p>В корзине нет товаров</p>
            ) : (
                { shoppingCart }
            )}
        </>

    );
}