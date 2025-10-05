import Nav from "../menu/Nav";
import logo from "../logo/market.svg"
import { useNavigate } from 'react-router-dom';

import { getShoppingCartCount } from "../../api/shopping-cart/shopping-cart-api";

import headerStyle from "./header.module.css"

export default function Header() {
    const navigate = useNavigate();

    const shoppingCartCount = getShoppingCartCount();

    return (
        <>
            <header className={headerStyle.header}>
                <img src={logo} alt="logo" onClick={() => navigate("/")} />
                <Nav />
                Товаров в корзине: {shoppingCartCount}
            </header>
            <hr />
        </>
    );
}