import Nav from "../menu/Nav";
import logo from "../logo/market.svg"
import { useNavigate } from 'react-router-dom';

import headerStyle from "./header.module.css"

export default function Header() {
    const navigate = useNavigate();

    return (
        <>
            <header className={headerStyle.header}>
                <img src={logo} alt="logo" onClick={() => navigate("/")} />
                <Nav />
            </header>
            <hr />
        </>
    );
}