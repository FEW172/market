import GoodsItem from "../../components/container/GoodsItem";
import { useLoaderData } from "react-router-dom";

export default function ProductPage() {
    const product = useLoaderData();

    return (
        <div>
            <h1>Карточка товара</h1>
            <GoodsItem goodsData={product.products} detailed={true}>
            <button></button>
            </GoodsItem>
        </div>)
}