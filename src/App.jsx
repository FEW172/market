
import { useState } from "react";
import Button from "../src/components/button/button";

import Goods from "./components/container/Goods";
import { useGetGoods } from "./hooks/hooks";

import './App.css'
import GoodsItem from "./components/container/GoodsItem";

function getSorting() {
    return [
        { id: 1, text: "Сортировать по цене" },
        { id: 2, text: "Сортировать по рейтингу" }
    ]
}

function App() {

    const goodsList = useGetGoods();

    const [goods, setGoods] = useState(goodsList.goods ? goodsList.goods : []);
    const [filteredGoods, setFilteredGoods] = useState(goodsList.goods ? goodsList.goods : []);

    const handleChangeSearchInput = (search) => {
        if (search !== '') {
            const filteredData = goods.filter((item) => {
            return Object.values(item.name).join('').toLowerCase().includes(search.toLowerCase())
            })
            setFilteredGoods(filteredData)
        } else {
            setFilteredGoods(goods)
        }
    }

    const handleSortButtonClick = (text) => {

        switch (text) {
            case "Сортировать по цене":
                setFilteredGoods([...filteredGoods].sort((a, b) => a.price - b.price));
                break;
            case "Сортировать по рейтингу":
                setFilteredGoods([...filteredGoods].sort((a, b) => a.rating - b.rating));
                break;
            default:
                setGoods(filteredGoods);
        }
    };

    const sorting = getSorting()
        .map(sort => <Button key={sort.id}
            text={sort.text}
            onClickButton={() => handleSortButtonClick(sort.text)} />);

    return (
        <>
            <h1> Market </h1>

            <h2>Товары</h2>
            <div>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => handleChangeSearchInput(e.target.value)}
                    placeholder="Поиск товара"
                />
            </div>

            <div>
                {sorting}
            </div>

            <br />

            {goodsList.error ?
                <p>Товары отсутствуют</p> :
                <Goods goodsData={filteredGoods} />
            }
        </>
    )
}

export default App
