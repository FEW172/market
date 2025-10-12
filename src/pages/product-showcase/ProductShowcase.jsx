import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import GoodsItem from "../../components/container/GoodsItem";
import Button from "../../components/button/Button"
import { useTransliteration } from "../../hooks/hooks";
import { useDispatch } from "react-redux";
import {add} from "../../slice/ShoppingCartSlice"


export default function ProductShowcase() {

    const dispatch = useDispatch();
    const { products } = useLoaderData();

    const [productsFiltered, setProductsFiltered] = useState(products);

    useEffect(() => {
        setProductsFiltered(products.filter(product => product.availability))
    }, [products]);

    const handleChangeSearchInput = (search) => {
        if (search !== '') {
            const filteredData = productsFiltered.filter((item) => {
                return Object.values(item.name).join('').toLowerCase().includes(search.toLowerCase())
            })
            setProductsFiltered(filteredData);
        } else {
            setProductsFiltered(products.filter(product => product.availability));
        }
    }

    const handleAddItemToShoppingCart = item => {
        dispatch(add(item));
    }

    function getCategoryList() {
        const unique = [];
        products.map(item => {
            if (unique.indexOf(item.category) === -1) {
                unique.push(item.category)
            }
        });
        return unique;
    }

    const categoryMenu = getCategoryList()
        .map((item, index) =>
            <Link key={index} to={"/products/" + useTransliteration(item)}> {item} </Link>
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
        .map(goodsItem => <GoodsItem
            key={goodsItem.id}
            goodsData={goodsItem}>
            <div>
                <Link to={`/product/${goodsItem.id}`}>Подробнее</Link>
            </div>
            <Button
                disable={goodsItem.quantity <= 0 ? true : false}
                text="Добавить в корзину"
                onClickButton={() => {handleAddItemToShoppingCart(goodsItem)}}
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