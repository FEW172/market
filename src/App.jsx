
import { useState } from "react";
import Button from "../src/components/button/button";

import Goods from "./components/container/Goods";
import { useGetGoods } from "./hooks/hooks";

import './App.css'

function getSorting() {
    return [
        { id: 1, text: "Сортировать по цене" },
        { id: 2, text: "Сортировать по рейтингу" }
    ]
}

function App() {

    const goodsList = useGetGoods();

    const [goods, setGoods] = useState(goodsList.goods ? goodsList.goods : []);

    const handleSortButtonClick = (text) => {

        switch (text) {
            case "Сортировать по цене":
                setGoods([...goodsList.goods].sort((a, b) => a.price - b.price));
                break;
            case "Сортировать по рейтингу":
                setGoods([...goodsList.goods].sort((a, b) => a.rating - b.rating));
                break;
            default:
                setGoods(goodsList.goods);
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
                {sorting}
            </div>

            <br />

            {goodsList.error ?
                <p>Товары отсутствуют</p> :
                <Goods goodsData={goods} />
            }
        </>
    )
}

export default App
