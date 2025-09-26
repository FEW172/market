
import Goods from "./components/container/Goods";
import { useGetGoods } from "./hooks/hooks";

import './App.css'
function App() {

    const goodsList = useGetGoods();

    return (
        <>
            <h1> Market </h1>

            <h2>Товары</h2>

            {goodsList.error ?
                <p>Товары отсутствуют</p> :

                <Goods goodsData={goodsList.goods} />
            }
        </>
    )
}

export default App
