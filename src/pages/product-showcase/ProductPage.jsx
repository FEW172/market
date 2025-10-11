import GoodsItem from "../../components/container/GoodsItem";
import { Link, useParams, useLoaderData } from "react-router-dom";
import Button from "../../components/button/Button"
import { getProductsAny3 } from "../../api/products/productsapi";

function handleAddItemToShoppingCart(item) {
    console.log("Add: ", item);
}

export default function ProductPage() {
    const { id } = useParams();
    const { products } = useLoaderData();

    if (products === undefined) {

        const productsAny3 = getProductsAny3();

        const productsShow = productsAny3
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
                <div>
                    Нет товара с идентификатором: {id}

                </div>
                <br />
                <div>
                    {productsShow}
                </div>
            </>
        );

    } else {
        return (
            <div>
                <h1>Карточка товара</h1>
                <GoodsItem goodsData={products} detailed={true}>
                    <Button
                        disable={products.quantity <= 0 ? true : false}
                        text="Добавить в корзину"
                        onClickButton={() => handleAddItemToShoppingCart(products)}
                    />
                </GoodsItem>
            </div>)
    }
}