import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";

import GoodsItem from "../components/container/GoodsItem";
import Button from "../components/button/Button";

import {add} from "../slice/ShoppingCartSlice"

function MainPage() {

    const dispatch = useDispatch();

    const { products } = useLoaderData();

    const handleAddItemToShoppingCart = item => {
        dispatch(add(item));
    }


    const productsShow = products
        .map(productsItem =>
            <GoodsItem
                key={productsItem.id}
                detailed={false}
                goodsData={productsItem}>
                <div>
                    <Link to={`/product/${productsItem.id}`}>Подробнее</Link>
                </div>
                <Button
                    disable={productsItem.quantity <= 0 ? true : false}
                    text="Добавить в корзину"
                    onClickButton={() => handleAddItemToShoppingCart(productsItem)}
                />
                <br />
            </GoodsItem>)

    return (
        <>
            <h1>ТОП-5 <br /> по рейтингу</h1>
            {productsShow}
        </>
    )
}

export default MainPage
