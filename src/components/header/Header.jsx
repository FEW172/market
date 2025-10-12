import Nav from "../menu/Nav";
import logo from "../logo/market.svg"
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { countProductsInShoppingCart } from "../../slice/ShoppingCartSlice";
import headerStyle from "./header.module.css"

export default function Header() {
    const navigate = useNavigate();

    const shoppingCartCount = useSelector(countProductsInShoppingCart);

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