import { useGetProducts } from "../hooks/hooks";
import GoodsItem from "../components/container/GoodsItem";

function MainPage() {

    const productsList = useGetProducts();
    const products = (productsList.products ? productsList.products : [])
        .filter(productsItem => productsItem.availability);;

    const sortedRatingProducts = products.sort((a, b) => b.rating - a.rating);
    const top5Products = sortedRatingProducts.slice(0, 5);

    const productsShow = top5Products
        .map(productsItem => <GoodsItem
            key={productsItem.id}
            goodsData={productsItem}>

            <button></button>
        </GoodsItem>)

    return (
        <>
            <h1>ТОП-5 товаров по рейтингу</h1>
            {productsShow}
        </>
    )
}

export default MainPage
