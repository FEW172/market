import nav from "./nav.module.css"
import { Link } from "react-router-dom";

const linkStyle = {
    padding: "20px",
    color: "black",
    textDecoration: "none"
};

function getLinkList() {
    return [
        { id: 1, uri: "/", text: "Главная страница" },
        { id: 2, uri: "/product-showcase", text: "Витрина товаров" },
        { id: 3, uri: "/shopping-cart", text: "Корзина" }
    ];
}

// передача данных в компонент: все атрибуты передаются в составе объекта props,
// благодаря синтаксису {} разбиваются на отдельные переменные

export default function Nav() {
    // отрисовка списков (для динамических список обязательно использовать атрибут key с уникальным значением элемента)
    // на основе полученного массива метод map сформирует список элементов Link 
    const links = getLinkList()
        .map(link => <Link key={link.id} to={link.uri}>
            {link.text}
        </Link>);

    return (
        <nav className={nav.container}>
            {links}
        </nav>
    )
}