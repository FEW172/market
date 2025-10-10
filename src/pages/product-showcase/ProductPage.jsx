import GoodsItem from "../../components/container/GoodsItem";
import { useLoaderData } from "react-router-dom";
import Button from "../../components/button/Button"

export default function ProductPage() {
    const product = useLoaderData();

    return (
        <div>
            <h1>Карточка товара</h1>
            <GoodsItem goodsData={product.products} detailed={true}>
                <Button
                    disable={product.products.quantity <= 0 ? true : false}
                    text="Добавить в корзину"
                    onClickButton={() => addItem(goodsItem)}
                />
            </GoodsItem>
        </div>)
}