import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import GoodsItem from "../../components/container/GoodsItem";
import Button from "../../components/button/Button"
import { useTransliteration } from "../../hooks/hooks";

export default function ProductShowcase() {

    const { products } = useLoaderData();

    console.log(products);

    const [productsFiltered, setProductsFiltered] = useState(products);

    const handleChangeSearchInput = (search) => {
        if (search !== '') {
            const filteredData = productsFiltered.filter((item) => {
                return Object.values(item.name).join('').toLowerCase().includes(search.toLowerCase())
            })
            setProductsFiltered(filteredData)
        } else {
            setProductsFiltered(productsAll)
        }
    }

    function getCategoryList() {
        return [
            {
                id: 1,
                category: "Основные",
                urlCategory: "/products/" + useTransliteration("Основные")
            },
            {
                id: 2,
                category: "Дополнительные",
                urlCategory: "/products/" + useTransliteration("Дополнительные")
            },
            {
                id: 3,
                category: "Запчасти",
                urlCategory: "/products/" + useTransliteration("Запчасти")
            }
        ]
    };

    const categoryMenu = getCategoryList().map(item =>
        <Link key = {item.id} to={item.urlCategory}> {item.category} </Link>
    );

    const handleSortButtonClick = (text) => {
        switch (text) {
            case "Сортировать по цене":
                setProductsFiltered([...productsFiltered].sort((a, b) => a.price - b.price));
                break;
            case "Сортировать по рейтингу":
                setProductsFiltered([...productsFiltered].sort((a, b) => a.rating - b.rating));
                break;
            default:
                setProductsFiltered(productsFiltered);
                console.error("При сортировке что-то пошло не так");
        }
    };

    const productsShow = productsFiltered
        .filter(goodsItem => goodsItem.availability)
        .filter(goodsItem => goodsItem.quantity > 0)
        .map(goodsItem => <GoodsItem
            key={goodsItem.id}
            goodsData={goodsItem}>
            <div>
                <Link to={`/product/${goodsItem.id}`}>Подробнее</Link>
            </div>
            <Button
                disable={goodsItem.quantity <= 0 ? true : false}
                text="Добавить в корзину"
                onClickButton={() => addItem(goodsItem)}
            />
            <br />
        </GoodsItem>)

    return (
        <>
            {categoryMenu}
            <hr />
            <h1>Витрина товаров</h1>

            <div>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => handleChangeSearchInput(e.target.value)}
                    placeholder="Поиск товара"
                />
            </div>
            <div>

                <Button
                    text="Сортировать по цене"
                    onClickButton={() => handleSortButtonClick("Сортировать по цене")} />
                <Button
                    text="Сортировать по рейтингу"
                    onClickButton={() => handleSortButtonClick("Сортировать по рейтингу")} />
            </div>
            <br />

            {productsShow}

        </>
    )

}