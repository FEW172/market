
export default function GoodsItem({ goodsData }) {

    console.log(goodsData);

    if (!goodsData.availability) {
        return null;
    }

    return (
        <>
            <div>
                <div>id: {goodsData.id}</div>
                <div>Категория: {goodsData.category}</div>
                <div>Название: {goodsData.name}</div>
                <div>Символьный код: {goodsData.code}</div>
                <div>Цена: {goodsData.price}</div>
                <div>Рейтинг: {goodsData.rating}</div>
                <div>Количество на складе: {goodsData.quantity}</div>
                <br />
            </div>
        </>
    )
}